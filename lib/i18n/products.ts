import type { Product } from '@/lib/products'
import type { Locale } from '@/lib/i18n/translations'
import { translate } from '@/lib/i18n/translations'

const productTranslations: Record<number, { name: string; description: string }> = {
  1: {
    name: 'قميص أبيض كلاسيكي بأزرار',
    description: 'قطعة أساسية خالدة مصنوعة من قطن فاخر. مثالي للمكتب والإطلالات اليومية، بقصة أنيقة وتفاصيل راقية.',
  },
  2: {
    name: 'بليزر أزرق داكن',
    description: 'بليزر أنيق بصف واحد من الأزرار بلون أزرق غني. مصنوع من مزيج صوف فاخر، قطعة متعددة الاستخدام ترتقي بأي إطلالة.',
  },
  3: {
    name: 'بنطال كتان كاجوال',
    description: 'بنطال كتان مريح وقابل للتنفس بقصة مسترخية. مثالي للطقس الدافئ والمناسبات غير الرسمية.',
  },
  4: {
    name: 'سترة كشمير',
    description: 'سترة كشمير فاخرة برقبة دائرية بلون بيج ناعم. ناعمة ودافئة للغاية، مثالية للطبقات.',
  },
  5: {
    name: 'جاكيت دنيم',
    description: 'جاكيت دنيم كلاسيكي بقصة عصرية. مصنوع من دنيم فاخر، قطعة متعددة الاستخدام على مدار العام.',
  },
  6: {
    name: 'معطف ترنش صوف',
    description: 'معطف ترنش أنيق بصفين من الأزرار بلون جملي. قطعة خارجية خالدة لا تخرج عن الموضة.',
  },
  7: {
    name: 'تيشيرت قطن',
    description: 'تيشيرت أساسي برقبة دائرية من قطن عضوي. ناعم ومريح ومثالي للارتداء اليومي.',
  },
  8: {
    name: 'تنورة ميدي مطوية',
    description: 'تنورة ميدي مطوية أنيقة بلون رمادي فحمي. قصة مُرضية تتناسق بجمال مع أي قطعة علوية.',
  },
  9: {
    name: 'بنطال تشينو',
    description: 'بنطال تشينو كلاسيكي بلون كاكي. متعدد الاستخدامات ومريح، مناسب للإطلالات الكاجوال والأنيقة.',
  },
  10: {
    name: 'بلوزة حرير',
    description: 'بلوزة حرير فاخرة بتفاصيل رقيقة. مثالية للمناسبات الخاصة أو لإضفاء لمسة أنيقة على إطلالتك اليومية.',
  },
  11: {
    name: 'كارديجان واسع',
    description: 'كارديجان واسع ودافئ من knit ناعم. مثالي للطبقات وإضافة الراحة لأي إطلالة.',
  },
  12: {
    name: 'بنطال مفصل',
    description: 'بنطال مفصل أنيق بلون أزرق داكن. احترافي وأنيق، مثالي للمكتب أو المناسبات الرسمية.',
  },
}

export function getLocalizedProduct(product: Product, locale: Locale) {
  const localized = locale === 'ar' ? productTranslations[product.id] : null

  return {
    name: localized?.name ?? product.name,
    description: localized?.description ?? product.description,
    categoryLabel: translate(locale, `product.${product.category}`),
  }
}

export function getLocalizedProductName(productId: number, fallbackName: string, locale: Locale) {
  if (locale === 'ar' && productTranslations[productId]) {
    return productTranslations[productId].name
  }
  return fallbackName
}
