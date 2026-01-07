# Deployment Guide - immopal

## IONOS Webhosting Plus (Statischer Export)

### Voraussetzungen

- ✅ FTP-Zugang zu IONOS Hosting
- ✅ Node.js lokal installiert (für Build)
- ✅ Umgebungsvariablen konfiguriert

### Deployment-Schritte

#### 1. Statischen Export erstellen

```bash
npm run export
```

Dieser Befehl:
- Führt `next build` aus
- Erstellt optimierte statische HTML/CSS/JS Dateien im `/out` Ordner
- Keine Node.js Server nötig!

#### 2. `/out` Ordner via FTP hochladen

1. Mit FTP zu IONOS verbinden
2. Inhalt des `/out` Ordners in den öffentlichen Ordner hochladen (z.B. `/html` oder `/public_html`)
3. `.htaccess` für SPA-Routing konfigurieren

#### 3. .htaccess konfigurieren

Erstelle eine `.htaccess` Datei im öffentlichen Ordner mit folgendem Inhalt:

```apache
# Enable Rewrite Engine
RewriteEngine On
RewriteBase /

# Don't rewrite index.html
RewriteRule ^index\.html$ - [L]

# Redirect legacy URLs (optional)
RewriteRule ^immobilien/?$ /angebote/ [R=302,L]
RewriteRule ^immobilien/([^/]+)/?$ /angebote/?slug=$1 [R=302,L,QSA]

# If the file or directory doesn't exist, redirect to index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Optional: Force HTTPS
# RewriteCond %{HTTPS} off
# RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Optional: Browser Caching für statische Assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>
```

### Production Checklist

Vor dem Live-Gang:

- [ ] `NEXT_PUBLIC_SITE_URL` auf Produktions-Domain setzen (z.B. `https://www.immo-pal.de`)
- [ ] Drupal API ist vom Browser aus erreichbar
- [ ] N8N Webhook-Endpunkte testen (Formulare absenden)
- [ ] Custom Domain in IONOS konfiguriert
- [ ] HTTPS/SSL-Zertifikat aktiviert (Let's Encrypt via IONOS)
- [ ] Alle Formulare testen:
  - [ ] Verkaufen-Funnel komplett durchgehen
  - [ ] Kaufen-Funnel komplett durchgehen
  - [ ] Kontaktformular (falls vorhanden)
- [ ] Inserate laden von Drupal
- [ ] Bilder werden korrekt angezeigt
- [ ] Navigation funktioniert auf allen Seiten

### Troubleshooting

**Problem:** Seite zeigt 404 bei direktem URL-Aufruf (z.B. `/verkaufen`)

**Lösung:** `.htaccess` nicht korrekt konfiguriert oder mod_rewrite nicht aktiviert. Kontaktiere IONOS Support.

**Problem:** Inserate laden nicht

**Lösung:** Überprüfe:
1. Browser-Konsole für CORS-Fehler
2. `NEXT_PUBLIC_DRUPAL_API_BASE` ist korrekt gesetzt (Achtung: bei `output: "export"` wird der Wert beim Build in den JS-Bundle eingebrannt)
3. Drupal API ist öffentlich erreichbar (URL im Browser öffnen)
4. **Mixed Content**: Wenn die Website über **HTTPS** läuft, muss die Drupal API ebenfalls über **HTTPS** erreichbar sein (HTTP → wird vom Browser blockiert)

**Problem:** Formulare werden nicht abgesendet

**Lösung:**
1. Browser-Konsole für Fehler prüfen
2. `NEXT_PUBLIC_FUNNEL_WEBHOOK_URL` ist korrekt
3. N8N Webhook ist erreichbar (teste mit curl/Postman)

---

## Alternative: Vercel (Empfohlen für automatisches Deployment)

### Vorteile
- ✅ Automatisches Deployment bei git push
- ✅ Preview-Deployments für Pull Requests
- ✅ Globales CDN
- ✅ Kostenlos für private Projekte

### Setup-Schritte

1. **Repository zu Vercel verbinden:**
   - Gehe zu [vercel.com](https://vercel.com)
   - "New Project" → GitHub Repository auswählen

2. **Environment Variables konfigurieren:**
   ```
   NEXT_PUBLIC_SITE_URL=https://immopal.de
   NEXT_PUBLIC_DRUPAL_API_BASE=http://217.154.85.224:8081
   NEXT_PUBLIC_FUNNEL_WEBHOOK_URL=https://automation.codariq.de/webhook/...
   NEXT_PUBLIC_PEXELS_API_KEY=...
   ```

3. **Deploy:**
   - Vercel erkennt automatisch Next.js
   - Build Command: `npm run build` (automatisch)
   - Output Directory: `.next` (automatisch)
   - Deployment erfolgt automatisch

4. **Custom Domain hinzufügen:**
   - Settings → Domains → `immopal.de` hinzufügen
   - DNS-Einträge bei Domain-Provider aktualisieren

---

## Lokaler Test des Static Exports

Vor dem Hochladen zu IONOS testen:

```bash
# Export erstellen
npm run export

# Ins out-Verzeichnis wechseln
cd out

# Lokalen Server starten
npx serve

# Im Browser öffnen: http://localhost:3000
```

Teste alle wichtigen Features:
- ✅ Navigation funktioniert
- ✅ Inserate laden
- ✅ Formulare absenden (zu N8N)
- ✅ Bilder werden angezeigt

---

## Update-Workflow für IONOS

Wenn du Änderungen machst:

1. Code lokal ändern
2. Lokal testen: `npm run dev`
3. Export erstellen: `npm run export`
4. Neuen `/out` Ordner via FTP hochladen (überschreibt alten)
5. Live-Site testen

**Tipp:** Nutze ein FTP-Tool wie [FileZilla](https://filezilla-project.org/) für einfacheres Hochladen.

---

## Performance-Optimierung

### Empfohlene .htaccess Ergänzungen

```apache
# GZIP Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Leverage Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType application/json "access plus 0 seconds"
</IfModule>
```

### CDN (Optional)

Für noch bessere Performance:
1. IONOS → CloudFlare kostenlos verbinden
2. DNS auf CloudFlare umstellen
3. Automatisches Caching + CDN weltweit

