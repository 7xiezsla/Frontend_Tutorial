// 簡化 function 名稱
const dom = document;
dom.select = dom.querySelector;
dom.selectAll = dom.querySelectorAll;
dom.on = dom.addEventListener;
Element.prototype.select = Element.prototype.querySelector;
Element.prototype.selectAll = Element.prototype.querySelectorAll;
Element.prototype.on = Element.prototype.addEventListener;

const root_div = dom.select("#root");

const data = [
    {
        id: 1,
        name: "妙蛙種子",
        class: "草,毒",
    },
    {
        id: 2,
        name: "妙蛙草",
        class: "草,毒",
    },
    {
        id: 3,
        name: "妙蛙花",
        class: "草,毒",
    },
    {
        id: 4,
        name: "小火龍",
        class: "火",
    },
    {
        id: 5,
        name: "火恐龍",
        class: "火",
    },
    {
        id: 6,
        name: "噴火龍",
        class: "火,飛行",
    },
    {
        id: 7,
        name: "傑尼龜",
        class: "水",
    },
    {
        id: 8,
        name: "卡咪龜",
        class: "水",
    },
    {
        id: 9,
        name: "水箭龜",
        class: "水",
    },
];

const table = dom.createElement("table");
const thead = dom.createElement("thead");
const tbody = dom.createElement("tbody");

const column_name_array = ["編號", "名稱", "屬性"];
const th = dom.createElement("tr");

column_name_array.forEach((column_name, idx) => {
    const temp = dom.createElement("th");
    temp.innerHTML = column_name;
    th.appendChild(temp);
});

thead.appendChild(th);

data.forEach((row, i) => {
    const tr = dom.createElement("tr");
    ["id", "name", "class"].forEach((column_name) => {
        const td = dom.createElement("td");
        td.innerHTML = row[column_name];
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
});

table.appendChild(thead);
table.appendChild(tbody);
root_div.appendChild(table);
