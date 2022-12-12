import React from "react";
import {render} from "react-dom";
import {
    Button,
    Card,
    CardBody,
    CardContent,
    CardMedia, Col,
    DsplL, Row,
    TextBoxBiggerTitle, TextBoxBigTitle, TextBoxRoot,
    TextBoxSubTitle
} from "@salutejs/plasma-ui";
import {Link, useNavigate} from "react-router-dom";




type TopicProps = {
    id?: string,
    name?: string,
}

export const Topic = ({name, id} : TopicProps) => {

    const nav = useNavigate();

    return (
        <div  style={{}}>
            <Card style={{ width: '90%', marginTop: '1em' }}  tabIndex={0} outlined scaleOnFocus>
                <CardBody>
                    <CardContent>
                        <TextBoxRoot>
                            <TextBoxBigTitle>Подзаголовок</TextBoxBigTitle>
                            <TextBoxBiggerTitle>{name}</TextBoxBiggerTitle>
                            <TextBoxSubTitle>Подпись</TextBoxSubTitle>
                        </TextBoxRoot>
                            <Button
                                text="Начать"
                                view="primary"
                                size="s"
                                scaleOnInteraction={false}
                                outlined={false}
                                stretch
                                style={{ marginTop: '1em' }}
                                tabIndex={-1}
                                onClick={() => nav(`/topic/${id}`)}
                            />

                    </CardContent>
                </CardBody>
            </Card>
        </div>
    )
}