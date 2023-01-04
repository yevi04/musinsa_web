import React from "react"
import styled from "styled-components"
import { Button } from "./Button"

const CompaignVisualChild = styled.div`
position: relative;
height: 800px;
margin: 0 auto;
`
const Video = styled.video`
position: absolute;
width: 100%;
left: 50%;
top: 0;
transform: translateX(-50%);
`
const CenterNav = styled.nav`
position: relative;
    z-index: 20;
    max-height: 160px;
`
const CenterNavWrap = styled.div`
width: 100%;
margin: 0 auto;
`
const CenterNavDepth1 = styled.div`
display: flex;
    position: relative;
    z-index: 1;
    width: 1280px;
    margin: 0 auto;
`

const A = styled.a`
display: flex;
    height: 80px;
    font-size: 18px;
    letter-spacing: .36px;
    justify-content: center;
    align-items: center;
    width: 50%;
`
export const Section = () => {
    const [state, setState] = React.useState({
        depth: '특가',

    });
    const style1 = state.depth === '특가' ? { backgroundColor: 'black', color: 'white'} : { color: 'black'}
    return(
        <section>
            <div>
                <CompaignVisualChild>
                    <Video autoPlay={"autoPlay"} loop={"loop"} muted={"muted"}>
                        <source src="https://image.musinsa.com/videos/campaign_video/2022121316363700000099992.mp4" typeof="video/mp4"/>
                    </Video>
                </CompaignVisualChild>
            </div>
            <CenterNav>
                <CenterNavWrap>
                    <CenterNavDepth1>
                        <A style={style1}>특가</A>
                    </CenterNavDepth1>
                </CenterNavWrap>
            </CenterNav>
        </section>
    )
}