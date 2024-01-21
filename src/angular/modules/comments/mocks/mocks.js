export const commentsList = [
    {
        avatarUrl: '',
        username: 'waterplea',
        postedAt: +new Date('2021-02-13'),
        message: 'Этот тренд сам себя вызывает',
        thread: [
            {
                avatarUrl: '',
                username: 'joelinger',
                postedAt: +new Date('2022-02-13'),
                message: 'Ага, только надо бы еще сворачивать и разворачивать треды',
                thread: [
                    {
                        avatarUrl: '',
                        username: 'waterplea',
                        message: 'Сделаем, но потом',
                        postedAt: +new Date('2022-02-13'),
                        thread: [
                            {
                                avatarUrl: '',
                                username: 'nobody',
                                message: 'Сделаем, но потом, тут еще проблема с импортами шаблонов...',
                                postedAt: +new Date('2022-02-13')
                            }
                        ]
                    }
                ]
            },
            {
                avatarUrl: '',
                username: 'nobody',
                message: 'Еще бы с асинхронностью разобраться...',
                postedAt: +new Date('2022-02-13'),
                thread: [
                    {
                        avatarUrl: '',
                        username: 'waterplea',
                        message: 'Сделаем, но потом, тут еще проблема с импортами шаблонов...',
                        postedAt: +new Date('2022-02-13')
                    }
                ]
            }
        ]
    },
    {
        avatarUrl: '',
        username: 'waterplea',
        message: 'Ну как там с деньгами?',
        postedAt: +new Date('2021-02-13'),
        thread: []
    }
]