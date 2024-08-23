import Image from "next/image";
import beianLogo from "@/asserts/beian/beian-logo.png";
import logo from '@/asserts/beian/logo.png'
import { loveFont } from "@/config/font";
import clsx from 'clsx'
export default function Home() {
  return (
    <section className="flex-1">
      <nav className="fixed w-full shadow-md z-50 bg-white px-8 py-3 flex items-center opacity-90">
        <div className="w-10 h-10 overflow-hidden rounded-full cursor-pointer hover:animate-spin">
          <Image src={logo} alt="logo" className="h-full w-10"/>
        </div>
        <div className={clsx("ml-2", loveFont.className)} style={loveFont.style}>钟繇 - zhongyao</div>
      </nav>
      <main>
        <figure className="w-screen h-screen bg-fixed bg-no-repeat bg-cover bg-center bg-[url('https://www.todaybing.com/api/today/cn?size=hd')] after:bg-[url('/website/dot.png')] after:opacity-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-repeat relative"></figure>
      </main>
      <footer className="flex justify-between">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">
          京ICP备2023020098号-1
        </a>
        <div className="flex ml-6">
          <Image src={beianLogo} alt="beian" className="object-cover mr-2" />
          <a
            target="_blank"
            rel="noopener"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011402054310"
          >
            京公网安备11011402054310号
          </a>
        </div>
      </footer>
    </section>
  );
}
