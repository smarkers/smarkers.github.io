/**
 * Created by Administrator on 2017/2/26.
 */
window.onload=function () {
    function jsonData() {
        var json={"TableName":"生产原材料入库单明细视图",
            "SaveTableName":"生产原材料入库单明细视图",
            "Columns":[{
                "FieldName":"单据编码",
                "DataType":"String",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"单位序号",
                "DataType":"Number",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"商品编码",
                "DataType":"String",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"商品名称",
                "DataType":"String",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"批次编码",
                "DataType":"String",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"单位",
                "DataType":"String",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"数量",
                "DataType":"Number",
                "IsKey":false,
                "IsReadOnly":true
            },{
                "FieldName":"含税单价",
                "DataType":"Number",
                "IsKey":false,
                "IsReadOnly":true
            },{
                "FieldName":"含税金额",
                "DataType":"Number",
                "IsKey":false,
                "IsReadOnly":true
            },{
                "FieldName":"无税单价",
                "DataType":"Number",
                "IsKey":false,
                "IsReadOnly":true
            },{
                "FieldName":"无税金额",
                "DataType":"Number",
                "IsKey":false,
                "IsReadOnly":true
            },{
                "FieldName":"备注",
                "DataType":"String",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"抽检合格率",
                "DataType":"Number",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"批次核算",
                "DataType":"Boolean",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"原材料入库序号",
                "DataType":"Number",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"加权平均",
                "DataType":"Number",
                "IsKey":false,
                "IsReadOnly":true
            },{
                "FieldName":"税率",
                "DataType":"Number",
                "IsKey":false,
                "IsReadOnly":true
            },{
                "FieldName":"税金金额",
                "DataType":"Number",
                "IsKey":false,
                "IsReadOnly":true
            },{
                "FieldName":"排序",
                "DataType":"Number",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"价格方式",
                "DataType":"String",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"进价方式",
                "DataType":"String",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"单位比率",
                "DataType":"Number",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"货架编码",
                "DataType":"String",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"是否含税",
                "DataType":"Boolean",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"是否末级",
                "DataType":"Boolean",
                "IsKey":false,
                "IsReadOnly":false
            },{
                "FieldName":"是否允许负库存",
                "DataType":"Boolean",
                "IsKey":false,
                "IsReadOnly":false
            }],
            "Rows":[{
                "EditType":"Original",
                "value":["SCRK201401-00383",1,"5515146","460ml7°P燕京纯生啤酒纸箱","140164","只",8260.0000,1.5600,12885.28,1.3333,11013.06,"",,true,1,0.000000,17.00,1872.22,1,"","0-按计划价",1.000000,"",false,true,true]
            },{"EditType":"Original",
                "value":["SCRK201401-00383",1,"5515144","460ml7°P燕京本生纸箱","140165","只",7920.0000,1.5600,12354.90,1.3333,10559.74,"",,true,2,0.000000,17.00,1795.16,2,"","0-按计划价",1.000000,"",false,true,true]
            },{"EditType":"Original",
                "value":["SCRK201401-00383",1,"5515157","460ml7°P燕京冰纯啤酒纸箱","140166","只",15840.0000,1.5600,24709.78,1.3333,21119.47,"",,true,3,0.000000,17.00,3590.31,3,"","0-按计划价",1.000000,"",false,true,false]
            }]
        };

        var column=json.Columns;
        var row=json.Rows;
        // var value={};
        for(var k=0;k<row.length;k++){
            for(var j=0;j<row[k].value.length;j++){
                if (row[k].value[j]===true){

                    row[k].value[j]="是";
                    console.log(row[k].value[j]);
                }
                // console.log(row[k].value[j]);
            }

        }
       /* console.log(column.length);
         console.log(row.length);*/
        var table=document.getElementsByTagName("table")[0];
        var oTr=document.createElement("tr");
        table.appendChild(oTr);

        for (var i=0;i<column.length;i++){
            var oTd=document.createElement("td");
            oTr.appendChild(oTd);
            oTd.innerHTML=column[i].FieldName;
        }
        for(var h=0;h<row.length;h++){
            var oTr_value=document.createElement("tr");
            table.appendChild(oTr_value);
            for(var g=0;g<row[h].value.length;g++){
                var oTd_value=document.createElement("td");
                oTr_value.appendChild(oTd_value);
                if (row[h].value[g]===true){
                    row[h].value[g]="是";
                }else if(row[h].value[g]===false){
                    row[h].value[g]="否";
                }
                oTd_value.innerHTML=row[h].value[g];
            }

        }









    }

    function into() {
        jsonData();

    }
    into();

};