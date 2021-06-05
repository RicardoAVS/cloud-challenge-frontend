import Profile from "../profile/profile.component";
import Content from "../content/content.component";
import StatusBar from "../status-bar/status-bar.component";
import Contact from "../contact/contact.component";
import Image from "../../assets/ProfilePic.jpg";

import {
  PageContainer,
  ContentContainer,
  LeftContentContainer,
  RightContentContainer,
  Divider,
  Title,
} from "./home-page.styles";
import Footer from "../footer/footer.component";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let fetchData = async (webpage: string) => {
      try {
        let url = "https://gz1ost5v1h.execute-api.us-east-1.amazonaws.com/Prod";
        const result = await fetch(`${url}/visitors`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Website: webpage,
          }),
        })
        return result.json();
      } catch (error) {
          return error;
        };
    };

    fetchData("Cloud Challenge")
      .then((data) => {
        setCount(data.count);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <PageContainer>
      <Profile
        imageSrc={Image}
        profileName="Ricardo Villada"
        profession="Software Developer"
        summary="Software Development student wanting 
                                    to make a cereer using AWS and Python"
      ></Profile>
      <ContentContainer>
        <LeftContentContainer>
          <Title>Experience</Title>
          <Content
            title="Student"
            subTitle="Sena - CTMA"
            timeFrame="Oct'2019 - Present"
            description={`I am learning and working with a lot of new subjects and technologies
                                                related to Software Development. Such as HTML, CSS, Javascript for FrontEnd to Java, 
                                                C# for BackEnd and Postgresql/MySQL for Data Base`}
          ></Content>
          <Title>Skills</Title>
          <StatusBar name="HTML" statusBarWidth="80%"></StatusBar>
          <StatusBar name="CSS" statusBarWidth="66%"></StatusBar>
          <StatusBar name="JavaScript" statusBarWidth="60%"></StatusBar>
          <StatusBar name="Python" statusBarWidth="70%"></StatusBar>
          <StatusBar
            name="AWS Cloud Computing"
            statusBarWidth="39%"
          ></StatusBar>
          <StatusBar name="SQL" statusBarWidth="45%"></StatusBar>
          <StatusBar name="English" statusBarWidth="64%"></StatusBar>
        </LeftContentContainer>

        <Divider></Divider>

        <RightContentContainer>
          <Title>Projects</Title>
          <Content
            title="Rock-Scissor-Papper"
            subTitle="Language - Java"
            description={`- A side project created to fill my curiosity and get
                                    practice. ${"\n"}
                                    - I learned Java, the importance of UML and designing before
                                    implementing the code. ${"\n"}
                                    - The challenge included designing the communication between
                                    Classes.`}
            projectStatus={{
              completed: true,
              sourceCode: "https://github.com/RicardoAVS/RockPaperScissor",
            }}
          ></Content>
          <Content
            title="AWS Serverless Hosted Resume Website"
            subTitle="Language - JavaScript/HTML/CSS and Python"
            description={`A project I started during Quarantine as part of a challenge called 
                                                The Cloud Resume Challenge I created a website to host my resume using
                                                AWS Services such as S3, DynamoDB, Lambda and Route53. 
                                                I was able to put previous HTML/CSS and Javascript knowledge into practice 
                                                for the FrontEnd. As well as learning about Python, Lambda Functions 
                                                and DynamoDB for the BackEnd`}
            projectStatus={{
              completed: true,
              sourceCode: "github.com/RicardoAVS/cloud-challenge-frontend",
            }}
          ></Content>
          <Content
            title="Spotify API"
            subTitle="Language - Python"
            description={`I learned about client-server architecture, 
                                                the different types of HTTP Requests methods as well as status codes.
                                                I used Jupyter NoteBooks as a toolkit during this project `}
            projectStatus={{
              completed: true,
              sourceCode: "github.com/RicardoAVS/spotify-api",
            }}
          ></Content>
          <Title>Contact</Title>
          <Contact
            iconClass="fab fa-github fa-5x"
            urlLink="https://github.com/RicardoAVS"
            name="/RicardoAVS"
          />
          <Contact
            iconClass="fab fa-linkedin fa-5x"
            urlLink="https://www.linkedin.com/in/ricardoavs"
            name="/RicardoAVS"
          />
          <Contact iconClass="fab fa-whatsapp fa-5x" name="+57 3054013169" />
          <Contact
            iconClass="far fa-envelope fa-5x fab"
            name="ricardovillada@hotmail.com"
          />
        </RightContentContainer>
      </ContentContainer>
      <Footer 
            count={String(count)}
      />
    </PageContainer>
  );
};

export default HomePage;
