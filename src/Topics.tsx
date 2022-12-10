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
import {Link} from "react-router-dom";


type TopicsPageProps = {
    topics: string[],
}

export const ChooseTopicPage = ({topics} : TopicsPageProps) => {

    return (
        <>
            <Row>
                {topics.map((topic) => (
                    <Col sizeS={4} sizeM={3} sizeL={4} sizeXL={3}>
                        <Topic name={topic}/>
                    </Col>
                ))}
            </Row>

        </>
    )

}

type TopicProps = {
    id?: string,
    name?: string,
}

const Topic = ({name, id} : TopicProps) => {

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
                        <Link to={`/topic/${id}`}>
                            <Button
                                text="Начать"
                                view="primary"
                                size="s"
                                scaleOnInteraction={false}
                                outlined={false}
                                stretch
                                style={{ marginTop: '1em' }}
                                tabIndex={-1}
                            />
                        </Link>

                    </CardContent>
                </CardBody>
            </Card>
        </div>
    )
}