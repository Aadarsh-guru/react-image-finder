import { Box, InputBase, styled } from "@mui/material"

const Component = styled(Box)({
    background:'#F6F6F6',
    '& > div' : {
        margin: 10,
    }
})

const BreadCrumb = ({setText, setCount}) => {

  return (
    <Component>
        <InputBase placeholder="Search Images" onChange={(e)=>setText(e.target.value)} />
        <InputBase placeholder="Number of Images" type="number" onChange={(e)=>setCount(e.target.value)} />
    </Component>
  )
}

export default BreadCrumb