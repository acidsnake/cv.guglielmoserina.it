import { Icon } from '@iconify/react';

export default function Button({css, cta, url, iconType = null, isBlank = false}) { 
  const style = `${css} inline-flex justify-center items-center rounded-md text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700`
  const target = isBlank ? '_blank' : ''

  return (
    <>
      <a
        href={url}
        className={style}
        target={target}
      >
        {cta}
        <Icon icon={iconType} style={{ marginLeft: '8px' }} />
      </a>
    </>
  )
}