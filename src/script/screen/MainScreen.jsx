import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../comonent/Header';
import { Button } from '../comonent/Button';
import { scroll, MainSection } from '../comonent/MainSection';

const StyleList = styled.ul`
  position: fixed;
  right: 30px;
  bottom: 300px;
  background-color: rgba(0,0,0,0.5);
  list-style: none;
`

const ContentListItem = styled.li`
color: white;
font-weight: bold;
font-size: 18px;
`

const ContentList = () => {
  const content = ["패딩", "코트", "니트", "ACC"]
  return(
    <StyleList>
      {
        content.map(content => {
          return <ContentListItem onClick={() => scroll(content)}>{content}</ContentListItem>
        })
      }
    </StyleList>
  );
};

const MainScreen = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <ContentList/>
      <Button
        style={{
          position: 'fixed',
          right: 30,
          bottom: 130,
          width: 80,
          height: 80,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: '#0078FF',
          borderRadius: '50%',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 18
        }}
        text={"맨위로"} />
      <Link to="/login">
        <Button
          style={{
            position: 'fixed',
            right: 30,
            bottom: 30,
            width: 80,
            height: 80,
            backgroundColor: '#0078FF',
            borderColor: '#0078FF',
            borderRadius: '50%',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18
          }}
          text={"로그인"} />
      </Link>
    </div>
  );
};

export default MainScreen;