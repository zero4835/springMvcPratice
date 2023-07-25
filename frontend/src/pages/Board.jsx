import React, { useEffect, useState } from 'react';
import BoardInfo from '../components/BoardInfo';
import PostPreview from '../components/PostPreview';
import { useParams } from 'react-router-dom';

function Board() {
  const { boardId } = useParams();
  const [pId, setPId] = useState('');
  const [pIcon, setPIcon] = useState('');
  const [pDescription, setPDescription] = useState('');
  const [pName, setPName] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log(boardId);
      try {
        const [boardResponse, postResponse] = await Promise.all([
          fetch(`http://localhost:8080/api/board/${boardId}`),
          fetch(`http://localhost:8080/api/post/board/${boardId}`),
        ]);

        if (!boardResponse.ok || !postResponse.ok) {
          throw new Error('獲取資料失敗');
        }

        const [boardData, postData] = await Promise.all([
          boardResponse.json(),
          postResponse.json(),
        ]);

        setPId(boardData.id);
        setPIcon(boardData.iconUrl);
        setPDescription(boardData.description);
        setPName(boardData.boardName);
        console.log(boardData);
        console.log(postData);
        setData(postData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [boardId]);

  return loading ? (
    <></>
  ) : (
    <>
      <div className="m-12">
      </div>
      <div className="m-12">
        <BoardInfo
          boardId={pId}
          boardIcon={pIcon}
          boardName={pName}
          boardDescription={pDescription}
        />
      </div>
      <div className="m-12">
        {data.map((d) => (
          <PostPreview
            key={d.id}
            title={d.title}
            contentPreview={d.content}
            userIcon={d.user.imgUrl}
            userName={d.user.firstName}
            boardName={d.board.boardName}
            boardIcon={d.board.iconUrl}
            userId={d.user.mid}
            boardId={d.board.id}
            postId={d.id}
          />
        ))}
      </div>
    </>
  );
}

export default Board;
