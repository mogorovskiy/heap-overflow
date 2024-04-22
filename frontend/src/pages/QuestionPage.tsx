import PageWithHeader from "./PageWithHeader";
import {useParams} from "react-router-dom";
import {QuestionDto} from "../common/types/question/QuestionDto";
import {calcHowLongAgoWasCreated} from "../common/utils";
import React, {FormEvent, useState} from "react";
import Question from "../components/Question";
import Answer from "../components/Answer";
import TextareaMarkdownEditor from "../components/TextareaMarkdownEditor";
import {CreateAnswerRequest} from "../common/types/answer/request/CreateAnswerRequest";

const response: QuestionDto = {
    id: 1,
    title: "Run function at end of pipe",
    content: "# Attorney Analytics\n" +
        "\n" +
        "## Description\n" +
        "\n" +
        "ERP system for the Attorney Firm. It's my graduate work of 4th course Bachelor of Science (KPI, 2024).  \n" +
        "It allows to control firm in wide range of aspects, such as managing company's employees, clients, legal cases, \n" +
        "Few words about ERP [domain](assets/images/domain.png) model:\n" +
        " - User - serves as employee (worker, attorney...) and as site user in the same time. Has such properties, as first/last names, bio, title, emails, phones, locations, admissions etc.\n" +
        " - Client - records about clients we work with.\n" +
        " - Legal case - presents legal case that we handle for clients. Of course, it has assigned clients, attorneys, title, description, status, type and assigned payments.\n" +
        " - Payment - describes money transfer, which can be income (in out profit) or outcome for some case.\n" +
        "\n" +
        "## Table of Contents\n" +
        "\n" +
        "- [Demo](#demo)\n" +
        "- [Features](#features)\n" +
        "- [Installation](#installation)\n" +
        "- [Usage](#usage)\n" +
        "\n" +
        "## Demo\n" +
        "\n" +
        "[YouTube video demo](https://youtu.be/SeNbW0Mpe2M)\n" +
        "\n" +
        "[Domain model diagram](assets/images/domain.png)\n" +
        "\n" +
        "## Features\n" +
        "\n" +
        "- Secure authentication: accounts are protected with Spring Security 6. \n" +
        "You can login/register via regular login/password credentials or by the Google OAuth2.\n" +
        "If you are using API directly, don't forget to add `Authentication` header with `Bearer <TOKEN>` value.\n" +
        "In regular usage of application through browser, authentication process consists of passing JWT token, securely hidden in `httpOnly` cookie.\n" +
        "- Change color theme (light/dark) via switch\n" +
        "- Change site language (currently only ukrainian and english languages available)\n" +
        "- By default, user will be created only with `WORKER` role, that means that many features will be unavailable for your.\n" +
        "However, admins can login via extra `ADMIN` role, their accounts can be created directly by affecting DB or can be used default admin account,\n" +
        "that is being created along with DB bootstrapping on first application start.\n" +
        "- After registering, attorney has no title, and respectively, it will not be listed at the employees page. In order to appear there, \n" +
        "administrator should give such attorney a title. This can be done by admin at the `/dashboard/promote-employee` page\n" +
        "- `/analytics` page allows you to see firm stats between dates, get 'Attorneys of the month' board and see latest closed cases and firm state \n" +
        "- `/dashboard` page allows you to manage firm resources, such as employees hiring/firing, promoting, check salary bonus suggestions,\n" +
        "declaring payment and adding new client.\n" +
        "- `/payments`, `/clients` are regular pageable listings of according entities\n" +
        "- `/employees` shows list of attorneys, grouped by title. Each attorney can be viewed separately at his individual page.\n" +
        "- `/cases` shows pageable listing of legal cases. They also have their individual pages.\n" +
        "\n" +
        "## Installation\n" +
        "\n" +
        "1. Clone this repo using `git clone <URL>`\n" +
        "2. Ensure that Java 17+ and MySQL are installed\n" +
        "3. Fill out MySQL username and password in `resources/application.properties`\n" +
        "   and `resources/liquibase.properties`\n" +
        "4. Google OAuth client-id is required. Instruction about how it obtain: https://developers.google.com/identity/oauth2/web/guides/get-google-api-clientid\n" +
        "5. Grab your client-id and put it to the `application.properties`\n" +
        "6. In your frontend root folder, create `.env` file from `.env.sample`\n" +
        "7. Start backend API\n" +
        "8. Run frontend React app by `cd frontend` and `npm run start` or build optimized production build by running `npm run build`\n" +
        "\n" +
        "## Usage\n" +
        "\n" +
        "As this application positioned as Fullstack, we can use it in both ways - like an RESTful API\n" +
        "or like regular web-site - via browser.  \n" +
        "In order to use it like API, we can refer to the swagger at the `/api/swagger-ui/index.html#/` endpoint:\n" +
        "\n" +
        "![domain](assets/images/swagger.png)\n" +
        "\n" +
        "or just by regular request sending through Postman or any other tool.\n" +
        "\n" +
        "---\n" +
        "\n" +
        "## Technologies used\n" +
        "\n" +
        "### Backend:\n" +
        "![spring](https://img.shields.io/badge/spring-5FB832?style=for-the-badge&logo=spring&logoColor=white)\n" +
        "![jwt](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)\n" +
        "![oauth2](https://img.shields.io/badge/OAuth2-EB5424?style=for-the-badge&logo=auth0&logoColor=white)\n" +
        "![lombok](https://img.shields.io/badge/Lombok-A50034?style=for-the-badge)\n" +
        "![swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)\n" +
        "![mapstruct](https://img.shields.io/badge/Mapstruct-FF3E00?style=for-the-badge)\n" +
        "![testcontainers](https://img.shields.io/badge/Testcontainers-333333?style=for-the-badge&logo=linuxcontainers&logoColor=white)\n" +
        "![liquibase](https://img.shields.io/badge/Liquibase-2962FF?style=for-the-badge&logo=liquibase&logoColor=white)\n" +
        "![mysql](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)\n" +
        "\n" +
        "\n" +
        "### Frontend:\n" +
        "![react](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)\n" +
        "![redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)\n" +
        "![typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)\n" +
        "![tailwind](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)\n" +
        "![postcss](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)\n" +
        "![bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)\n" +
        "![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)\n" +
        "![router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)\n" +
        "![gapi](https://img.shields.io/badge/Google%20OAuth2%20API-4285F4?style=for-the-badge&logo=google&logoColor=white)\n" +
        "![axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)\n" +
        "![chartjs](https://img.shields.io/badge/chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)\n" +
        "![jest](https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white)\n",
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
            content: "## Installation\n" +
                "\n" +
                "1. Clone this repo using `git clone <URL>`\n" +
                "2. Ensure that Java 17+ and MySQL are installed\n" +
                "3. Fill out MySQL username and password in `resources/application.properties`\n" +
                "   and `resources/liquibase.properties`\n" +
                "4. Google OAuth client-id is required. Instruction about how it obtain: https://developers.google.com/identity/oauth2/web/guides/get-google-api-clientid\n" +
                "5. Grab your client-id and put it to the `application.properties`\n" +
                "6. In your frontend root folder, create `.env` file from `.env.sample`\n" +
                "7. Start backend API\n" +
                "8. Run frontend React app by `cd frontend` and `npm run start` or build optimized production build by running `npm run build`",
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
    const [answerInputValue, setAnswerInputValue] = useState("");

    const submitAnswer = (event: FormEvent) => {
        event.preventDefault();

        const requestBody : CreateAnswerRequest = {
            questionId: parseInt(questionId!),
            content: answerInputValue,
        }

        console.log("POST ANSWER: ", requestBody)
    };

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
            <form onSubmit={submitAnswer} className="flex flex-col align-items-start gap-y-4 pb-5">
                <p className="display-6 m-0" style={{fontSize: "1.6rem"}}>Your answer</p>
                <div className="w-100">
                    <TextareaMarkdownEditor handleChange={setAnswerInputValue} />
                </div>
                <button type="submit" className="btn btn-primary">Post Your Answer</button>
            </form>
        </div>
    </div>;

    return <PageWithHeader contentElement={contentElement} />;
}
