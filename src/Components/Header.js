import styled from 'styled-components'

let Header=(props)=>{
    return (
        <Container>
            <Content>
                <Logo>
                <a href="/home">
                    <img src="/images/home-logo.svg" alt=""/>
                </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder='Search Here'/>
                    </div>
                    <Searchicon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    </Searchicon>
                </Search>
            </Content>
        </Container>
    );
};
let Container=styled.div`
background-color:white ;
border-bottom:1px solid rgba(0,0,0,0.08) ;
left:0;
padding:0 24px;
position:fixed;
top:0;
width:100vw;
z-index:100;

`;
let Content=styled.div`
display:flex ;
align-items:center;
margin:0 auto;
min-height: 100%;
max-width:1128px;
`;
let Logo=styled.span`
margin-right:8px;
font-size:0px;

`;
let Search=styled.div`
opacity:1;
flex-grow:1;
position:relative;
&>div{
    max-width:280px;
    input{
        border:none;
        box-shadow:none;
        background-color:#eef3f8; 
        border-radius:2px;

        
    }
}
`;
let Searchicon=styled.div``;
export default Header