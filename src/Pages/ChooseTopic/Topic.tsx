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

export const Topic = ({name, id}: TopicProps) => {

    const nav = useNavigate();

    return (
        <div style={{height: "100%"}}>
            <Card style={{width: '90%', marginTop: '1em', height: "90%"}} tabIndex={0} outlined scaleOnFocus>
                <CardBody>
                    <CardContent style={{
                        minHeight: "100%",
                    }}>
                        <TextBoxRoot style={{
                            paddingBottom: '50px'
                        }}>
                            <TextBoxBiggerTitle>{name}</TextBoxBiggerTitle>
                        </TextBoxRoot>
                        <div style={{
                            position: "absolute",
                            bottom: "1em",
                            width: "calc(100% - 32px)"
                        }}>
                            <Button
                                text="Начать"
                                view="primary"
                                size="s"
                                scaleOnInteraction={false}
                                outlined={false}
                                stretch
                                style={{
                                    marginTop: '1em',

                                }}
                                tabIndex={-1}
                                onClick={() => nav(`/topic/${id}`)}
                            />
                        </div>


                    </CardContent>

                </CardBody>
            </Card>
        </div>
    )
}