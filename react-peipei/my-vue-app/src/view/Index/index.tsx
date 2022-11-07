import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Menu from '@/components/Menu/Index'
const ImgContainer = styled.div`
  font-size: 20px;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  box-sizing: border-box;
`

function Index() {
  // 首页界面
  return (
    <ImgContainer>
      <Menu />
    </ImgContainer>
  )
}

export default Index
