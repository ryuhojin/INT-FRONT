import styled from "styled-components";
import TipTap from "../common/TipTap";
import { FaGithub, FaBlogger, FaRegThumbsUp } from "react-icons/fa";
import { RiChatFollowUpLine } from "react-icons/ri";
import Button from "../common/Button";
import Router from "next/router";
import React, { useState } from "react";
import CommentList from "./CommentList";
const DetailStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  @media only screen and (min-width: 550px) {
    margin: 0 auto;
    width: 35%;
  }
`;
const DetailTitleStyle = styled.div`
  border-radius: 10px;
  h1 {
    margin: 0.5rem 0 1rem 0;
    font-weight: bold;
  }
  .strong {
    font-weight: 600;
  }
`;
const DetailTagStyle = styled.div`
  margin: 1rem 0 0.5rem 0;
  border-radius: 10px;
  span {
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 0.8rem;
    line-height: 1.8rem;
  }
  span + span {
    margin-left: 0.3rem;
  }
`;

const DetailContentStyle = styled.div`
  margin: 0.5rem 0;
  border-radius: 10px;
  line-height: 1.5rem;
`;
const DetailProfileStyle = styled.div`
  h2 {
    display: flex;
    justify-content: space-between;
  }
`;
const SolutionStyle = styled.div`
  border: 1px solid black;
  padding: 0.5rem;
  margin-top: 1rem;
  .flex-between {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
  }
`;

const Detail = ({
  detail,
  user,
  folUser,
  solutions,
  addSolution,
  adtSolution,
  delSolution,
  updSolution,
  recSolution,
  addComment,
  delComment,
  updComment,
  delIssue,
  updIssue,
  openDialog,
  editorRef,
}: any) => {
  const isIssueWriter = user ? user.userId == detail.developer.userId : false;
  return (
    <DetailStyle>
      <DetailTitleStyle>
        <h2
          style={{ cursor: "pointer", margin: "2rem 0" }}
          onClick={() => Router.push("/issue")}
        >
          ← 뒤로가기
        </h2>
        <h1>{detail.title}</h1>
        <span>
          <strong>{detail.developer.name}</strong>&nbsp;&nbsp;·&nbsp;&nbsp;
          <span>
            {detail.modifiedDate.substring(0, 10).replace(/-/gi, ".")}
          </span>
          {isIssueWriter ? (
            <>
              <span style={{ color: "gray" }}>
                &nbsp;
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => updIssue(detail)}
                >
                  수정
                </span>
                &nbsp;·&nbsp;
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => delIssue(detail.id)}
                >
                  삭제
                </span>
              </span>
            </>
          ) : (
            <></>
          )}
        </span>
        <br />
      </DetailTitleStyle>
      <DetailTagStyle>
        {detail.hashtags &&
          detail.hashtags.map((value: any, index: any) => {
            return (
              <React.Fragment key={index}>
                <span># {value}</span>
              </React.Fragment>
            );
          })}
      </DetailTagStyle>
      <hr style={{ border: "1px solid #d1d1d1", width: "100%" }} />
      <DetailContentStyle>
        <TipTap
          isEditable={false}
          height="300px"
          mode="reader"
          content={detail.content}
        />
      </DetailContentStyle>
      <hr style={{ border: "1px solid #d1d1d1", width: "100%" }} />
      <DetailProfileStyle>
        <h2>
          <span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                Router.push({ pathname: `/user/${detail.developer.name}` });
              }}
            >
              {detail.developer.name}
            </span>
            &nbsp;
            <RiChatFollowUpLine
              style={{ cursor: "pointer" }}
              color={detail.developer.followYn ? "orange" : "black"}
              onClick={() => folUser(detail.developer.userId)}
            />
          </span>
          <span>
            <a
              style={{ color: "black" }}
              target={"_blank"}
              rel="noreferrer"
              href={"https://" + detail.developer.gitUrl}
            >
              <FaGithub />
            </a>
            &nbsp;&nbsp;
            <a
              style={{ color: "black" }}
              target={"_blank"}
              rel="noreferrer"
              href={"https://" + detail.developer.webSiteUrl}
            >
              <FaBlogger />
            </a>
          </span>
        </h2>
        <h4>{detail.developer.introduction}</h4>
      </DetailProfileStyle>
      <hr style={{ border: "1px solid #d1d1d1", width: "100%" }} />
      {user ? (
        <>
          <h3 style={{ margin: "0.5rem 0 1rem 0" }}>SOLUTION</h3>
          <TipTap
            isEditable={true}
            height="150px"
            mode="editor"
            editorRef={editorRef}
          />
          <Button fullWidth size="medium" onClick={addSolution}>
            솔루션 등록
          </Button>
        </>
      ) : (
        <></>
      )}
      {solutions &&
        solutions.map((value: any, index: any) => {
          return (
            <>
              <SolutionStyle>
                <TipTap
                  key={index}
                  isEditable={false}
                  height="100%"
                  mode="reader"
                  content={value.content}
                />
                <p className="flex-between">
                  <strong>
                    {value.developer.name}
                    {value.adoptYn ? (
                      <span style={{ color: "orange" }}>
                        &nbsp;·&nbsp;채택됨
                      </span>
                    ) : (
                      <>
                        {isIssueWriter ? (
                          <span
                            onClick={() => {
                              adtSolution(value.id);
                            }}
                            style={{ color: "gray", cursor: "pointer" }}
                          >
                            &nbsp;·&nbsp;채택
                          </span>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </strong>
                  <span>
                    <FaRegThumbsUp
                      size={12}
                      style={{ cursor: "pointer" }}
                      onClick={() => recSolution(value.id)}
                    />
                    &nbsp;{value.recommendationCount}
                  </span>
                </p>
                <hr />
                <h5 style={{ textAlign: "center", margin: "0.2rem 0" }}>
                  최종 수정 시간 : {value.modifiedDate}
                </h5>
                <CommentList
                  user={user}
                  value={value}
                  addComment={addComment}
                  delComment={delComment}
                  updComment={updComment}
                  delSolution={delSolution}
                  openDialog={openDialog}
                />
              </SolutionStyle>
            </>
          );
        })}
      <br />
    </DetailStyle>
  );
};
export default Detail;
