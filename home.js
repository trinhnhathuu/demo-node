var http = require('http');
var fs = require('fs');

() => {
    const treeData = [
        {
            label: 'Impressionism',
            value: 'impressionism',
            children: [
                {
                    label: 'Visual Arts',
                    value: 'visualArts',
                    children: [
                        {
                            label: 'Claude Monet',
                            value: 'Monet',
                        },
                        {
                            label: 'Pierre-Auguste Renoir',
                            value: 'Renoir',
                        },
                        {
                            label: 'Édouard Manet',
                            value: 'Manet',
                        },
                    ],
                },
                {
                    label: 'Music',
                    value: 'music',
                    children: [
                        {
                            label: 'Claude Debussy',
                            value: 'Debussy',
                        },
                        {
                            label: 'Maurice Ravel',
                            value: 'Ravel',
                        }
                    ]
                }
            ],
        }];
    return (
        <Cascader
            style={{ width: 400 }}
            treeData={treeData}
            placeholder="Please select"
        />
    );
};



sever
    .listen(3000, function(){
        console.log('Server is running on port 3000');
    });