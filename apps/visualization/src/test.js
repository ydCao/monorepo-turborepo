//解析 URL Params 为对象  需要考虑边缘条件
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

function parseParam (url) {
    if(!url) return 
    let obj = {}
    let arr = url.substring(url.indexOf('?')+1).split('&')
    arr.forEach(element => {
        let val = element.split('=')
        if(obj[val[0]]){
            obj[val[0]] = [].concat(obj[val[0]],val[1])
        }else{
            obj[val[0]] = val[1]
        }

    });
    return obj
}
parseParam(url)

let tree = [
    {
        "id": 1,
        "name": "Node 1",
        "parentId": null,
        "children": [
            {
                "id": 2,
                "name": "Node 2",

                "children": [
                
                    {
                        "id": 4,
                        "name": "Node 4",
                        "children": []
                    }
                ]
            },
            {
                "id": 3,
                "name": "Node 3",
                "children": [
                    {
                        "id": 5,
                        "name": "Node 5",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "name": "Node 6",
        "children": [
            {
                "id": 7,
                "name": "Node 7",
                "children": []
            }
        ]
    }
]


// 输出结果
let tree2 = [
    {
        "id": 1,
        "name": "Node 1",
        "parentId": null
    },
    {
        "id": 2,
        "name": "Node 2",
        "parentId": 1
    },
    {
        "id": 4,
        "name": "Node 4",
        "parentId": 2
    },
    {
        "id": 3,
        "name": "Node 3",
        "parentId": 1
    },
    {
        "id": 5,
        "name": "Node 5",
        "parentId": 3
    },
    {
        "id": 6,
        "name": "Node 6",
        "parentId": null
    },
    {
        "id": 7,
        "name": "Node 7",
        "parentId": 6
    }
]
// 树形结构转换为平面结构数据 需要根据结构保留对应的parentID 且不保留Children字段
function flatTree(tree, pid=null){
    let result = []
    tree.forEach((el)=>{
        if(el.children){
            result.push({id: el.id, name: el.name, parentId: pid})
            result = result.concat(flatTree(el.children, el.id))
        }else{
            result.push({id: el.id, name: el.name, parentId: null})
        }
    })
    return result
}
console.log(flatTree(tree));

// 将扁平化的树转换成tree
function toTree(tree2) {
    let tree = [];
    let map = {};  
    tree2.forEach((el) => {
        map[el.id] = el;
        el.children = el.children || [];// 初始化children数组
    });
    tree2.forEach((el) => {
        if (el.parentId) {
            if (map[el.parentId]) {
                map[el.parentId].children.push(el);
            } else {
                tree.push(el);// 处理父节点不存在的情况
            }
        } else {
            tree.push(el);// 添加根节点
        }
    });
    return tree
}
console.log(toTree(tree2));





