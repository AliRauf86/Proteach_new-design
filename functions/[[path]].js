export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  
  // Normal response al
  const response = await next();
  
  // Yalnız HTML və bot
  if (!response.headers.get('content-type')?.includes('text/html')) {
    return response;
  }
  
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot/i.test(userAgent);
  
  if (!isBot) {
    return response;
  }
  
  // HTML-i dəyişdir
  let html = await response.text();
  
  // Route-a görə meta tags
  const routes = {
    '/': {
      title: 'ProTeach | Peşəkar Tədris və Sertifikasiya Mərkəzi',
      description: 'ISO sertifikasiya, peşəkar təlimlər və IT konsultasiya xidmətləri.'
    },
    '/about': {
      title: 'Haqqımızda | ProTeach',
      description: 'ProTeach - Sertifikasiya və peşəkar təlim sahəsində aparıcı mərkəz.'
    },
    '/training': {
      title: 'Təlimlər | ProTeach',
      description: 'Beynəlxalq standartlar əsasında hazırlanmış təlim proqramları.'
    },
    '/certification': {
      title: 'Sertifikasiya | ProTeach',
      description: 'Beynəlxalq tanınan ISO sertifikatları.'
    },
    '/consultation': {
      title: 'Konsultasiya | ProTeach',
      description: 'Peşəkar IT konsultasiya xidmətləri.'
    },
    '/solutions': {
      title: 'Həllər | ProTeach',
      description: 'Rəqəmsal transformasiya həlləri.'
    },
    '/contact': {
      title: 'Əlaqə | ProTeach',
      description: 'Bizimlə əlaqə saxlayın.'
    },
    '/faq': {
      title: 'Tez-tez Verilən Suallar | ProTeach',
      description: 'ProTeach haqqında ən çox soruşulan suallar.'
    },
    '/training/portfolio': {
      title: 'Təlim Portfeli | ProTeach',
      description: 'ProTeach təlim portfeli.'
    },
    '/training/levels': {
      title: 'Kurs Səviyyələri | ProTeach',
      description: 'Foundation, Professional və Lead Auditor.'
    },
    '/training/process': {
      title: 'Sertifikatlaşdırma Prosesi | ProTeach',
      description: 'PECB sertifikatlaşdırma prosesi.'
    },
    '/training/criteria': {
      title: 'Sertifikatlaşdırma Meyarları | ProTeach',
      description: 'Sertifikat əldə etmək üçün tələblər.'
    },
    '/training/delivery': {
      title: 'Çatdırılma Metodları | ProTeach',
      description: 'Əyani, online və self-study formatları.'
    },
    '/about/partners': {
      title: 'Tərəfdaşlar | ProTeach',
      description: 'ProTeach-in beynəlxalq tərəfdaşları.'
    }
  };
  
  const route = routes[url.pathname] || routes['/'];
  
  // Title dəyişdir
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${route.title}</title>`
  );
  
  // Description əlavə et (əgər yoxdursa)
  if (!html.includes('<meta name="description"')) {
    html = html.replace(
      '</head>',
      `<meta name="description" content="${route.description}"></head>`
    );
  }
  
  return new Response(html, {
    headers: response.headers
  });
}
