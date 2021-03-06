import {generate as id} from "shortid";

export const basket = {"total_sum":0,"total_cont":0},
    options = [
    { "codeName":"category",
        "className":"",
        "name":"Категория",
        "byName":false,
        "select":["Все","Завтраки","Первые блюда","Гарниры"]
    },
    { "codeName":"price",
        "className":"price-",
        "byName":true,
        "name":"Цена",
        "befor":"До",
        "after":"грн.",
        "select":["0","30","50","100","150"]
    }
],
    items = [
    { _id:id() ,"active":false,
        "info":{
            "name":"Овсяная каша с фруктами",
            "category":1,
            "img":"im1.jpg"
        },
        "data":{
            "price":25,
            "v":"грн",
            "counter":0
        }

    },
    { _id:id() ,"active":false,
        "info":{
            "name":"Яичница глазунья с овощами на сковородке",
            "category":1,
            "img":"im2.jpg"
        },
        "data":{
            "price":25,
            "v":"грн",
            "counter":0
        }

    },
    { _id:id() ,"active":false,
        "info":{
            "name":"Сет азербайджанский завтрак",
            "category":1,
            "img":"im3.jpg"
        },
        "data":{
            "price":30,
            "v":"грн",
            "counter":0
        }

    },
    { _id:id() ,"active":false,
        "info":{
            "name":"Яичница с помидорами по-бакински",
            "category":1,
            "img":"im4.jpg"
        },
        "data":{
            "price":45,
            "v":"грн",
            "counter":0
        }

    },
    { _id:id() ,"active":false,
        "info":{
            "name":"Сырники со сметаной",
            "category":1,
            "img":"im5.jpg"
        },
        "data":{
            "price":45,
            "v":"грн",
            "counter":0
        }

    },
    { _id:id() ,"active":false,
        "info":{
            "name":"Шпинатный крем-суп",
            "category":2,
            "img":"im6.jpg"
        },
        "data":{
            "price":50,
            "v":"грн",
            "counter":0
        }

    },
    { _id:id() ,"active":false,
        "info":{
            "name":"Суп Пити",
            "category":2,
            "img":"im7.jpg"
        },
        "data":{
            "price":85,
            "v":"грн",
            "counter":0
        }

    },
    { _id:id() ,"active":false,
        "info":{
            "name":"Борщ украинский",
            "category":2,
            "img":"im8.jpg"
        },
        "data":{
            "price":95,
            "v":"грн",
            "counter":0
        }

    },
    { _id:id() ,"active":false,
        "info":{
            "name":"Суп Кюфта Бозбаш",
            "category":2,
            "img":"im9.jpg"
        },
        "data":{
            "price":100,
            "v":"грн",
            "counter":0
        }

    },
    { _id:id() ,"active":false,
        "info":{
            "name":"Картофель фри",
            "category":3,
            "img":"im10.jpg"
        },
        "data":{
            "price":125,
            "v":"грн",
            "counter":0
        }

    },
    { _id:id() ,"active":false,
        "info":{
            "name":"Картофель по-домашнему",
            "category":3,
            "img":"im11.jpg"
        },
        "data":{
            "price":135,
            "v":"грн",
            "counter":0
        }

    },
    { _id:id() ,"active":false,
        "info":{
            "name":"Рис с овощами",
            "category":3,
            "img":"im12.jpg"
        },
        "data":{
            "price":150,
            "v":"грн",
            "counter":0
        }

    }
];