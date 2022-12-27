import {Col, Row} from "@salutejs/plasma-ui";
import React from "react";
import {Topic} from "./Topic";

type TopicsPageProps = {
    topics: string[],
}

export const ChooseTopicPage = ({topics} : TopicsPageProps) => {

    //ToDo:
    //Получать топики с бэкенда

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