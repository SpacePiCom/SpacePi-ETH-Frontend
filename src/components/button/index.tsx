import styled from 'styled-components'

export const ButtonBox = styled.div`
  .shadow__btn {
    padding: 16px 20px;
    border: none;
    font-size: 17px;
    color: #000;
    font-family: 'Yu Gothic UI';
    font-style: normal;
    line-height: normal;
    text-transform: uppercase;
    border-radius: 7px;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.5s;
    transition-property: box-shadow;
    width: auto;
    min-width: 160px;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    display: grid;
    cursor: pointer;
    background: linear-gradient(90deg, #d4d4d4 0%, #fff 100%);
    @media screen and (max-width: 768px) {
      min-width: 100%;
      font-size: 16px;
      padding: 12px 16px;
    }
  }

  .shadow__btn:hover {
    transform: scale(1.1);
  }

  .primary {
    background: linear-gradient(90deg, #336bfe 0%, #0ebafd 100%);
    color: #fff;
  }

  .border {
  }
`

export interface ButtonPropsType {
  children?: React.ReactNode
  type?: 'primary' | 'border'
  disabled?: boolean
}

export const Button = (props: ButtonPropsType | any) => {
  const { type = 'primary'} = props
  return (
    <ButtonBox>
      <button className={'shadow__btn ' + type} {...props} style={{}}>
        <span style={{ zIndex: 1 }}>{props.children}</span>
      </button>
    </ButtonBox>
  )
}
