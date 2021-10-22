import { useState, useEffect } from "react";
import { List } from "antd";

export default function ItemList() {
  const uid = 1;
  const [listItmes, setListItems] = useState();
  useEffect(() => {
    if (!uid) {
      setListItems(null);
    } else {
      fetch(`https://honeydo-api-bc.web.app/items/${uid}`)
        .then((response) => response.json())
        .then((data) => setListItems(data))
        .catch((err) => alert(err));
    }
  }, [uid]);
  return (
    <List
      size="large"
      bordered
      dataSource={listItmes}
      renderItem={(item) => <List.Item>{item.name}</List.Item>}
    />
  );
}
