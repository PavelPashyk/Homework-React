import "./App.css";
import { Button } from "./components/Button";
import { Clicker } from "./components/Clicker";
import { EmojiList } from "./components/Emoji/EmojiList";
import { Input } from "./components/Input";
import { PostCards } from "./components/PostСards/ListPost";
import { Title } from "./components/Title";
import { UserName } from "./components/UserName";
import { emojies } from "./mocks/emojies";
import { listPosts } from "./mocks/listPosts";

const onClickLogin = () => {
  alert("Hello 1");
};

const onClickSingUp = () => {
  alert("Hello 2");
};

const onClickLogout = () => {
  alert("Hello 3");
};

function App() {
  return (
    <div className="app">
      {/* <div className="app-block block-btn">
        <Button text="Login" onClick={onClickLogin} type="btnStyleFirst" />
        <Button
          text="Sing up"
          onClick={onClickSingUp}
          disabled={false}
          type="btnStyleSecond"
        />
        <Button
          text="Logout"
          onClick={onClickLogout}
          disabled={true}
          type="btnStyleThird"
        />
      </div>
      <div className="app-block block-input">
        <Input value={5486} placeholder={"string"} maxlength={10} />
        <Input value={"Hello"} placeholder={"number"} />
        <Input placeholder={"string"} maxlength={11} />
      </div>
      <div className="app-block block-title">
        <Title
          text="Sign in"
          type="styleBlockTextOne"
          typeText="styleTextOne"
        />
        <Title
          text="Sign in"
          type="styleBlockTextTwo"
          typeText="styleTextTwo"
        />
        <Title
          text="Sign in"
          type="styleBlockTextOne"
          typeText="styleTextTwo"
        />
        <Title
          text="Sign in"
          type="styleBlockTextTwo"
          typeText="styleTextOne"
        />
      </div>
      <div className="app-block block-user">
        <UserName userName="Pavel Pashyk" isDark={true} />
        <UserName userName="Artem Nord" />
        <UserName userName="Darya Wills" isDark={true} />
        <UserName userName="Olga" />
      </div>
      <div className="app-block block-clicker">
        <Clicker />
      </div>
      <div className="app-block block-post">
        <PostCards posts={listPosts} />
      </div> */}
      <div className="app-block block-emoji">
        <EmojiList emojies={emojies} />
      </div>
    </div>
  );
}

export default App;
