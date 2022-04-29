import styled from "styled-components";

const Main = (props) => {
  return <Container><Sharebox>
    Share
  </Sharebox>
  <div>
    <img src="/images/user.svg"></img>
    <button> Start a Post</button>
  </div>
  <div>
    <button>
    <img src="/images/images.svg"></img>
    <span>Photo</span>
    </button>
    <button>
    <img src="/images/camera-video.svg"></img>
    <span>Video</span>
    </button>
    <button>
    <img src="/images/event-icon.svg"></img>
    <span>Event</span>
    </button>
  </div>
  </Container>;
};

const Container = styled.div`
  grid-area: main;
`;
const comonCart=styled.div`
text-align:center;
overflow:hidden ;
margin-bottom:8px ;
background-color:#fff ;
border-radius:5px ;
position: relative;
border:none;
box-shadow:0 0 0 rgb(0 0 0/15%),0 0 0 rgb(0 0 0/ 20%);
`;
const Sharebox= styled(comonCart)`
display: flex;
flex-direction:column;
color:#958b7b;
margin:0 0 8px;
background:white;
`;

export default Main;
