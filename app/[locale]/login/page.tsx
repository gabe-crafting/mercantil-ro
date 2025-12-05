import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const t = useTranslations('login');

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          {t('title')}
        </h1>
        <p className="text-lg text-muted-foreground">
          Coming soon...
        </p>
      </div>
    </div>
  );
}

