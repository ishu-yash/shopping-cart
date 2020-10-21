import React, { useEffect } from "react";
import { mapCartStateToProps } from "../../redux/maps/headerMap";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions/actions";
import actionCreator from "../../redux/actions/actionCreator";
import { Button, Table } from "antd";
import Icon from "../Icon";
import * as Ri from "react-icons/ri";
import { cloneDeep } from "lodash";

function Admin({ setTitle, orders, total, count, ...props }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreator(actions.SET_TITLE, "My Orders"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = () => {
    if (orders === undefined) return [];
    const newArray = cloneDeep(orders);
    return newArray.map((cur, index) => {
      // console.log(cur);
      return {
        key: index + 1,
        sno: index + 1,
        id: cur.id,
        date: cur.date,
        quan: cur.count,
        cost: cur.total.toFixed(2),
      };
    });
  };

  const getColumns = () => {
    const columns = [
      {
        title: "S.No.",
        dataIndex: "sno",
        key: "sno",
      },
      { title: "OrderID", dataIndex: "id", key: "id" },
      { title: "Date & Time", dataIndex: "date", key: "date" },
      { title: "Quantity", dataIndex: "quan", key: "quan" },
      { title: "Cost", dataIndex: "cost", key: "cost" },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (text, record) => (
          <Button
            onClick={() =>
              dispatch(
                actionCreator(actions.ASYNC_DELETE_ITEM_FROM_ORDER, {
                  id: record.id,
                  price: record.cost,
                  count: record.quan,
                })
              )
            }
          >
            <Icon Value={Ri.RiDeleteBin5Fill} />
          </Button>
        ),
      },
    ];
    return columns;
  };

  return (
    <div style={{ margin: "6.25rem 2rem 2rem 2rem" }}>
      <Table columns={getColumns()} dataSource={getData()} />
    </div>
  );
}

export default connect(mapCartStateToProps, null)(Admin);
