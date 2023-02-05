import React from "react"
import styled from "styled-components"
import { Button } from "./Button"

/* promotional video parent component */
const CompaignVisualChild = styled.div`
position: relative;
margin: 0 auto;
display: flex;
`

/* promotional video component */
const Video = styled.video`
margin: 0;
padding: 0;
width: 100%;
`

const StyleContentButton = styled.button`
display: flex;
height: 80px;
font-size: 18px;
justify-content: center;
align-items: center;
flex: 0 0 auto;
font-weight: bold;
margin: 0 10px;
background-color: white;
&:hover{
    cursor: pointer;
}
`

const StyleContentTitle = styled.span`
font-family: Musinsa,"Apple SD Gothic Neo","Noto Sans KR",sans-serif;
font-weight: bold;
font-size: 40px;
margin: 100px 0 50px 0;
`

const StyleImage = styled.img`
width: 20%;
// margin: 0 5px;
`

const Content = ({ title, imageUrl, price }) => {
    return (
        <CompaignVisualChild style={{ flexDirection: 'column', alignItems: 'center' }} id={title}>
            <StyleContentTitle>{title}</StyleContentTitle>
            <CompaignVisualChild style={{ justifyContent: 'center' }}>
                {
                    imageUrl.map((urlObject) => {
                        return (
                            <CompaignVisualChild style={{ alignItems: 'center', flexDirection: 'column', marginBottom: 50 }}>
                                <CompaignVisualChild style={{ justifyContent: 'center' }}>
                                    {
                                        urlObject.map(url => {
                                            return <StyleImage src={url} />
                                        })
                                    }
                                </CompaignVisualChild>
                                <Button
                                    style={{
                                        width: '50%',
                                        height: 80,
                                        backgroundColor: 'black',
                                        color: 'white',
                                        marginTop: 30,
                                        fontSize: 18
                                    }}
                                    text={"더보기"} />
                            </CompaignVisualChild>
                        )
                    })
                }
            </CompaignVisualChild>
        </CompaignVisualChild>
    )
}

const ContentButton = ({ type, target, event }) => {
    const style = type === target ? { color: 'black', borderBottomWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 } : { color: '#aaa', border: 0 };
    return <StyleContentButton onClick={() => event(type)} style={style}>{type}</StyleContentButton>;
};

const scroll = (text) => {
    const positionX = document.getElementById(text).getBoundingClientRect().left;
    const positionY = document.getElementById(text).getBoundingClientRect().top;
    window.scrollTo(positionX, positionY);
};

const getToMonth = (date) => {
    return (date.getMonth() + 1);
};

const Section = () => {
    const [targetContent, setContent] = React.useState("패딩");
    const ContentButtonClick = (text) => {
        setContent(text)
        scroll(text)
    };
    let video
    const date = new Date()
    const toMonth = getToMonth(date)
    switch (toMonth) {
        case 3: case 4: case 5:
            video = "https://image.musinsa.com/videos/campaign_video/2022121316363700000099992.mp4"
            break;
        case 6: case 7: case 8:
            video = "https://image.musinsa.com/videos/campaign_video/2023010614144400000044367.mp4"
            break;
        case 9: case 10: case 11:
            video = "https://image.musinsa.com/videos/campaign_video/2022121316363700000099992.mp4"
            break;
        case 12: case 1: case 2:
            video = "https://image.musinsa.com/videos/campaign_video/2023010614144400000044367.mp4"
            break;
        default:
            alert('날짜 형식 이상함')
    }
    const contentType = ["패딩", "코트", "니트", "ACC"]

    return (
        <section>
            <CompaignVisualChild>
                <Video autoPlay={"autoPlay"} loop={"loop"} muted={"muted"}>
                    <source src={video} typeof="video/mp4" />
                </Video>
            </CompaignVisualChild>
            <CompaignVisualChild style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {
                    contentType.map(content => {
                        return <ContentButton type={content} target={targetContent} event={ContentButtonClick}></ContentButton>
                    })
                }
            </CompaignVisualChild>
            <CompaignVisualChild style={{ flexDirection: 'column' }} id="contentFrame">
                {
                    contentType.map(content => {
                        let productThumbnail
                        if (content === "패딩") {
                            productThumbnail = [
                                [
                                    "https://image.msscdn.net/images/goods_img/20220811/2711590/2711590_5_500.jpg",
                                    "https://image.msscdn.net/images/goods_img/20220811/2711591/2711591_4_500.jpg",
                                    "https://image.msscdn.net/images/goods_img/20220811/2711588/2711588_4_500.jpg",
                                    "https://image.msscdn.net/images/goods_img/20220914/2789780/2789780_2_500.jpg"
                                ]
                            ]
                        } else if (content === "코트") {
                            productThumbnail = [
                                [
                                    "https://image.msscdn.net/images/goods_img/20221005/2840873/2840873_1_500.jpg",
                                    "https://image.msscdn.net/images/goods_img/20220801/2690744/2690744_2_500.jpg",
                                    "https://image.msscdn.net/images/goods_img/20221005/2840872/2840872_1_500.jpg",
                                    "https://image.msscdn.net/images/goods_img/20221013/2857423/2857423_1_500.jpg"
                                ]
                            ]
                        } else if (content === "니트") {
                            productThumbnail = [
                                [
                                    "https://image.msscdn.net/images/goods_img/20220901/2762417/2762417_2_500.jpg",
                                    "https://image.msscdn.net/images/goods_img/20220901/2762417/2762417_2_500.jpg",
                                    "https://image.msscdn.net/images/goods_img/20220901/2762417/2762417_2_500.jpg",
                                    "https://image.msscdn.net/images/goods_img/20220901/2762417/2762417_2_500.jpg",
                                ]
                            ]
                        } else if (content === "ACC") {
                            productThumbnail = [
                                [
                                    "https://image.msscdn.net/images/goods_img/20210917/2140067/2140067_2_500.jpg",
                                    "https://image.msscdn.net/images/goods_img/20210325/1863416/1863416_2_500.jpg",
                                    "https://image.msscdn.net/images/goods_img/20210325/1863414/1863414_2_500.jpg",
                                    "https://image.msscdn.net/images/goods_img/20210917/2140066/2140066_2_500.jpg"
                                ]
                            ]
                        }

                        return <Content title={content} imageUrl={productThumbnail} />
                    })
                }
            </CompaignVisualChild>
        </section>
    )
}



export { Section as MainSection, scroll };