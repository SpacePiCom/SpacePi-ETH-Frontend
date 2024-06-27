import { IconBox } from '@/components/icon/styles'
import iconPropsType from '@/components/icon/type'

export default function Icon(props: iconPropsType) {
  const { name, className = '', style = {}, onClick, color } = props
  return (
    <IconBox
      className={'icon ' + className}
      onClick={onClick}
      style={Object.assign({}, style, { color })}
    >
      <use xlinkHref={'#icon-' + name} />
    </IconBox>
  )
}
