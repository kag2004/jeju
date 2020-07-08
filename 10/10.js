//입력 값 5
//출력 그거 대로 출력 트리 만들기

const treeNumber = 5;

for(let i=1; i<= treeNumber; i++){
    let tree ='';
    for(let j=1; j<=treeNumber-i; j++){
        tree = tree + ' '
    }
    for(let k=1; k<=i*2-1; k++){
        tree = tree + '*';
    }
    console.log(tree)
}
