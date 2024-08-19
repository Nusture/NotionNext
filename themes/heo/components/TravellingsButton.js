import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'

/**
 * 开往按钮
 */
export default function TravellingsButton (props) {
  const { latestPosts } = props
  const router = useRouter()
  const { locale } = useGlobal()

  function handleClick () {
    const link = document.createElement('a')
    link.href = 'https://www.travellings.cn/go.html'
    link.click()
  }

  return (
    <div title={locale.MENU.TRAVELLINGS} className='cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-full w-10 h-10 flex justify-center items-center duration-200 transition-all' onClick={handleClick}>
      <i className="fa-solid fa-subway"></i>
    </div>
  )
}
