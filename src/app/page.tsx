import { TopMenuBar } from '@/components/TopMenuBar'
import { UpperToolbar } from '@/components/UpperToolbar'
import { LowerToolbar } from '@/components/LowerToolbar'
import { MainContent } from '@/components/MainContent'
import { BottomStatusBar } from '@/components/BottomStatusBar'

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <TopMenuBar />
      <UpperToolbar />
      <LowerToolbar />
      <div className="flex-grow overflow-hidden">
        <MainContent />
      </div>
      <BottomStatusBar />
    </div>
  )
}