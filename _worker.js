export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Asset-ləri normal fetch et
    const response = await env.ASSETS.fetch(request);
    
    // Yalnız HTML səhifələr üçün
    if (!response.headers.get('content-type')?.includes('text/html')) {
      return response;
    }
    
    // Bot detection
    const userAgent = request.headers.get('user-agent') || '';
    const isBot = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|linkedinbot/i.test(userAgent);
    
    if (!isBot) {
      return response;
    }
    
    // HTML-i oxu
    let html = await response.text();
    
    // Route-a görə meta tags
    const routes = {
      '/': {
        title: 'ProTeach | Peşəkar Tədris və Sertifikasiya Mərkəzi',
        description: 'ISO sertifikasiya, peşəkar təlimlər və IT konsultasiya xidmətləri. Beynəlxalq tanınan PECB sertifikatları, kibertəhlükəsizlik və rəqəmsal transformasiya həlləri.'
      },
      '/about': {
        title: 'Haqqımızda | ProTeach',
        description: 'ProTeach - Sertifikasiya və peşəkar təlim sahəsində aparıcı mərkəz. Beynəlxalq standartlar və keyfiyyətli xidmətlər.'
      },
      '/training': {
        title: 'Təlimlər | ProTeach',
        description: 'Beynəlxalq standartlar və ən yaxşı təcrübələr əsasında hazırlanmış peşəkar təlim proqramları.'
      },
      '/certification': {
        title: 'Sertifikasiya | ProTeach',
        description: 'Beynəlxalq tanınan ISO sertifikatları əldə edin və karyeranızı inkişaf etdirin.'
      },
      '/consultation': {
        title: 'Konsultasiya | ProTeach',
        description: 'Ən yaxşı təcrübə və standartlara əsaslanan konsaltinq yanaşması ilə davamlı inkişafı təmin edin.'
      },
      '/solutions': {
        title: 'Həllər | ProTeach',
        description: 'Rəqəmsal transformasiya həlləri ilə biznesinizə dəyər qatırıq.'
      },
      '/contact': {
        title: 'Əlaqə | ProTeach',
        description: 'Bizimlə əlaqə saxlayın. Peşəkar komandamız sizə kömək etməyə hazırdır.'
      },
      '/training/portfolio': {
        title: 'Təlim Portfeli | ProTeach',
        description: 'ProTeach təlim portfeli - ISO və IT standartları üzrə geniş kurs seçimi.'
      },
      '/training/levels': {
        title: 'Kurs Səviyyələri | ProTeach',
        description: 'Foundation, Professional və Lead Auditor səviyyələrində təlim proqramları.'
      },
      '/training/process': {
        title: 'Sertifikatlaşdırma Prosesi | ProTeach',
        description: 'PECB sertifikatlaşdırma prosesi və imtahan şərtləri haqqında məlumat.'
      },
      '/training/criteria': {
        title: 'Sertifikatlaşdırma Meyarları | ProTeach',
        description: 'Sertifikat əldə etmək üçün tələblər və meyarlar.'
      },
      '/training/delivery': {
        title: 'Çatdırılma Metodları | ProTeach',
        description: 'Əyani, online və self-study formatlarında təlim imkanları.'
      },
      '/about/partners': {
        title: 'Tərəfdaşlar | ProTeach',
        description: 'ProTeach-in beynəlxalq tərəfdaşları və akkreditasiyaları.'
      }
    };
    
    const routeData = routes[url.pathname] || routes['/'];
    
    // Title dəyişdir
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${routeData.title}</title>`
    );
    
    // Meta description dəyişdir (əgər varsa)
    if (html.includes('<meta name="description"')) {
      html = html.replace(
        /<meta name="description" content=".*?".*?>/,
        `<meta name="description" content="${routeData.description}">`
      );
    } else {
      // Əgər yoxdursa əlavə et
      html = html.replace(
        '</head>',
        `<meta name="description" content="${routeData.description}"></head>`
      );
    }
    
    return new Response(html, {
      headers: response.headers
    });
  }
};
