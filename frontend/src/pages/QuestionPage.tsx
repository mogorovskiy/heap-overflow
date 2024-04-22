import PageWithHeader from "./PageWithHeader";
import {useParams} from "react-router-dom";
import {QuestionDto} from "../common/types/question/QuestionDto";
import {calcHowLongAgoWasCreated} from "../common/utils";
import React from "react";
import Question from "../components/Question";
import Answer from "../components/Answer";

const response: QuestionDto = {
    id: 1,
    title: "Run function at end of pipe",
    content: "This code makes a sentence from two different columns in a data frame\n" +
        "\n" +
        "library(dplyr); library(tibble); library(magrittr)\n" +
        "\n" +
        "mtcars %>% \n" +
        "  rownames_to_column(var = \"car\") %>%\n" +
        "  sample_n(5) -> \n" +
        "  df\n" +
        "\n" +
        "paste0(df$car, \" (\", df$mpg, \")\", collapse = \", \")\n" +
        "\n" +
        "# \"Mazda RX4 Wag (21), Hornet Sportabout (18.7), Merc 280 (19.2), Dodge Challenger (15.5), Merc 450SLC (15.2)\"\n" +
        "But instead of having paste0(df$car, \" (\", df$mpg, \")\", collapse = \", \") run on a standalone line, how can I get it to run at end of pipe like the below (which throws an error as written):\n" +
        "\n" +
        "mtcars %>% \n" +
        "  rownames_to_column(var = \"car\") %>%\n" +
        "  sample_n(5) %>%\n" +
        "  paste0(df$car, \" (\", df$mpg, \")\", collapse = \", \")",
    askedAt: "2024-04-18 23:59:59.199999",
    tags: [
        {name: "python"},
            {name: "tensorflow"},
            {name: "coreml"},
            {name: "flite"},
            {name: "coremtools"},
        ],
    author: {
        id: 1,
        firstName: "Renan",
        lastName: "Casse",
        profilePhotoUrl: "https://www.gravatar.com/avatar/3514f42c8a7ebb09d4e96710f7a5fc5d?s=32&d=identicon&r=PG&f=y&so-version=2"
    },
    metadata: {
        rating: 0,
        answers: 2,
        views: 0,
    },
    answers: [
        {
            id: 1,
            content: "with() would work for this:\n" +
                "\n" +
                "mtcars %>% \n" +
                "  rownames_to_column(var = \"car\") %>%\n" +
                "  sample_n(5) %>% \n" +
                "  with(paste0(car, \" (\", mpg, \")\", collapse = \",\"))\n" +
                "Another possibility would be to end the pipe with:\n" +
                "\n" +
                "... %>% \n" +
                "   mutate(word = glue(\"{car} ({mpg})\")) %>% \n" +
                "   pull(word) %>% \n" +
                "   paste0(collapse =\", \")",
            author: {
                id: 1,
                firstName: "Renan",
                lastName: "Casse",
                profilePhotoUrl: "https://www.gravatar.com/avatar/3514f42c8a7ebb09d4e96710f7a5fc5d?s=32&d=identicon&r=PG&f=y&so-version=2"
            },
            createdAt: "2024-04-18 23:59:59.199999",
            metadata: {
                rating: 2,
            },
        },
        {
            id: 1,
            content: "with() would work for this:\n" +
                "\n" +
                "mtcars %>% \n" +
                "  rownames_to_column(var = \"car\") %>%\n" +
                "  sample_n(5) %>% \n" +
                "  with(paste0(car, \" (\", mpg, \")\", collapse = \",\"))\n" +
                "Another possibility would be to end the pipe with:\n" +
                "\n" +
                "... %>% \n" +
                "   mutate(word = glue(\"{car} ({mpg})\")) %>% \n" +
                "   pull(word) %>% \n" +
                "   paste0(collapse =\", \")",
            author: {
                id: 1,
                firstName: "Renan",
                lastName: "Casse",
                profilePhotoUrl: "https://www.gravatar.com/avatar/3514f42c8a7ebb09d4e96710f7a5fc5d?s=32&d=identicon&r=PG&f=y&so-version=2"
            },
            createdAt: "2024-04-19 23:59:59.199999",
            metadata: {
                rating: 5,
            },
        }
    ],
}

export default function QuestionPage() {
    const { questionId } = useParams();

    const contentElement = <div className="col-7 mx-auto border-l">
        <div className="px-4">
            <div className="flex flex-row justify-content-between align-items-center pt-4">
                <div className="text-start">
                    <p className="display-6" style={{fontSize: "2.2rem"}}>{response.title}</p>
                </div>
                <div>
                    <a href="#" className="btn btn-primary">Ask Question</a>
                </div>
            </div>
            <div>
                <span className="small text-secondary mr-3">
                    Asked <span className="text-black">{calcHowLongAgoWasCreated(response.askedAt)}</span>
                </span>
                <span className="small text-secondary">
                    Viewed <span className="text-black">{calcHowLongAgoWasCreated(response.askedAt)}</span>
                </span>
            </div>
            <hr />
            <Question data={response} />
            <div className="mt-3 flex flex-row justify-content-between align-items-center">
                <p className="display-6 m-0" style={{fontSize: "1.6rem"}}>{response.answers.length} answers</p>
                <span className="text-danger">todo: add sorting</span>
            </div>
            <div>
                {response.answers.map((answer, i) => <Answer key={i} data={answer} />)}
            </div>
            <div className="flex flex-col align-items-start gap-y-4">
                <p className="display-6 m-0" style={{fontSize: "1.6rem"}}>Your answer</p>
                <textarea></textarea>
                <a href="#" className="btn btn-primary">Post Your Answer</a>
            </div>
        </div>
    </div>;

    return <PageWithHeader contentElement={contentElement} />;
}
