import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
  return (
    <div>
        <Skeleton  count={10} />
    </div>
  )
}

export default Loading