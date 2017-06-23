export default {
  'meta': {
    'project': 'X',
    'version': 1.1,
    'author': 'wangyifeng03',
    'totalHours': 24,
    'startTime': new Date('2017-06-23'),
    'storys': [
      {
        'text': '优化着陆页体验',
        'date': '2017-06-23~'
      },
      {
        'text': '评论支持富文本',
        'date': '2017-06-23~2017-06-26'
      }
    ]
  },
  'storys': [
    {
      'text': '优化着陆页体验',
      'progress': null,
      'tasks': [
        {
          'status': 'done',
          'timing': [
            '1h'
          ],
          'isFloat': false,
          'after': null,
          'blame': null
        },
        {
          'status': 'active',
          'timing': [
            '1h',
            '3h',
            '2d'
          ],
          'isFloat': false,
          'after': null,
          'blame': null
        },
        {
          'status': 'pending',
          'timing': [
            '2h'
          ],
          'isFloat': false,
          'after': null,
          'blame': null
        },
        {
          'status': 'pending',
          'timing': [
            '1h'
          ],
          'isFloat': true,
          'after': null,
          'blame': null
        }
      ]
    },
    {
      'text': '评论支持富文本',
      'progress': null,
      'tasks': [
        {
          'status': 'pending',
          'timing': [
            '5h'
          ],
          'isFloat': false,
          'after': null,
          'blame': null
        },
        {
          'status': 'done',
          'timing': [
            '2h'
          ],
          'isFloat': false,
          'after': null,
          'blame': null
        },
        {
          'status': 'pending',
          'timing': [
            '2h',
            '6h',
            '1d'
          ],
          'isFloat': false,
          'after': '后端重构',
          'blame': '旧接口复用性问题'
        }
      ]
    }
  ]
}
