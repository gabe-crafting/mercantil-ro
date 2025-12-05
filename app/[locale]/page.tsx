import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-6xl font-bold tracking-tight">
          {t('title')}
        </h1>
        <p className="mb-2 text-2xl text-muted-foreground">
          {t('subtitle')}
        </p>
        <p className="text-lg text-muted-foreground">
          {t('description')}
        </p>
      </div>
    </div>
  );
}

