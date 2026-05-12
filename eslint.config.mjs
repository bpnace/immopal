import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const relaxedNextVitals = nextVitals.map((config) => {
  if (config.rules?.['react-hooks/set-state-in-effect']) {
    return {
      ...config,
      rules: {
        ...config.rules,
        'react-hooks/set-state-in-effect': 'warn',
      },
    }
  }

  return config
})

const eslintConfig = defineConfig([
  ...relaxedNextVitals,
  ...nextTs,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/no-unescaped-entities': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
