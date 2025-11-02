import { BackgroundCoverImage } from '@/commons/components/background-cover-image/background-cover-image'
import { PageFrame } from '@/commons/components/page-frame/page-frame'

export default function MagisterCreation() {
  return (
    <PageFrame>
      <BackgroundCoverImage
        source={require('@/assets/images/magister-creation.jpeg')}
        filter="none"
      />
    </PageFrame>
  )
}
