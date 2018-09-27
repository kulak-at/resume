
const me = {
    'experience': [
        {
            company: 'SwingDev',
            roles: [
                {
                    role: 'Developer Evangelist',
                    started: '2018.03',
                    ended: '2018.08',
                    description: 'New role in the company which meaning I had to shape myself. I have reworked the recruitment process, popularised technologies and solutions used among company in many articles and on the conference, conducted workshops and created internal developer guide.',
                    hashtags: ['writing articles', 'conducting interviews', 'creating developer guide', 'conducting workshops', 'creating and managing business relations']
                },
                {
                    role: 'Senior JavaScript Developer',
                    started: '2014.08',
                    ended: '2018.03',
                    description: 'I have been expanding existing applications as well as creating new solutions from the ground up. Partialy taking roles of Project Manager, Team Lead and Senior Architect. Mentoring Junior Developers.',
                    hashtags: ['JavaScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Webpack', 'AWS', 'React', 'Angular', 'TypeScript', 'Agile']
                }
            ]
        },
        {
            company: 'WhoElse',
            roles: [
                {
                    role: 'Android Developer',
                    started: '2014.04',
                    ended: '2014.07',
                    description: 'Developing Android application with 50k+ userbase.',
                    hashtags: ['Android', 'Java']
                }
            ]
        },
        {
            company: 'John Pitcher Interactive',
            roles: [
                {
                    role: 'Web & Mobile Developer',
                    started: '2013',
                    ended: '2014.03',
                    description: 'Creating various landing pages, sites and online contests mostly for marketing campaings and the government.',
                    hashtags: ['JavaScript', 'Backbone.js', 'PHP Silex', 'Node.js', 'Android', 'PhoneGap', 'Grunt']
                },
                {
                    role: 'Junior PHP / JavaScript Developer',
                    started: '2011',
                    ended: '2012',
                    description: 'Creating Facebook embeded sites, mailings.',
                    hashtags: ['PHP5', 'MySQL', 'MongoDB', 'JavaScript', 'HTM5', 'CSS3', 'Facebook API', 'Google Maps API']
                }
            ]
        },
        {
            company: 'Confected.com',
            roles: [{
                role: 'Product Developer',
                started: '2011',
                ended: '2013',
                description: 'Conference management and engagement mobile platform. Used by TEDxWarsaw and Imperial College',
                hashtags: ['PHP', 'Zend Framework', 'MySQL', 'HTML5', 'Agile', 'Mobile', 'RWD']
            }]
        },
        {
            company: 'Various Companies',
            roles: [{
                role: 'Freelancer',
                started: '2007',
                ended: '2014',
                description: 'Web development (frontend, backend) for various companies.',
                hashtags: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'Backbone.js', 'Android']
            }]
        }
    ],
    'education': [
        {
            company: 'University of Warsaw',
            roles: [ {
                role: 'Computer Science',
                started: '2013',
                ended: '2014',
                description: 'Dropped on the second year.'
            }
            ]
        }
    ],
    'awards': [
        {
            company: 'HackArt by Polish National Museum',
            roles: [{
                role: '3rd place',
                started: '2018',
                ended: '',
                description: 'Mind the Art project. AR solution for museums.'
            }]
        },
        {
            company: 'Canon Hackathon',
            roles: [{
                role: '3rd place',
                started: '2018',
                ended: '',
                description: 'Wall mapping solution for visualzing music using image projectors and Fast Fourier Transform.'
            }]
        },
        {
            company: 'Allegro Hackathon',
            roles: [{
                role: '1st place',
                started: '2015',
                ended: '',
                description: 'Allegrator - mobile app recommending you geek products based on your gaming and music history.'
            }]
        },
        {
            company: 'Dice+ Hackathon',
            roles: [{
                role: '3rd place',
                started: '2014',
                ended: '',
                description: 'Android game to be used with hardware bluetooth dice'
            }]
        },
        {
            company: 'Google Glass Hackathon',
            roles: [{
                role: '2nd place',
                started: '2013',
                ended: '',
                description: 'Application for google glass'
            }]
        },
        {
            company: 'Google Hackathon',
            roles: [{
                role: 'Award of Distinction',
                started: '2011',
                ended: '',
                description: 'HTML5 game with geolocation capabilities'
            }]
        }
    ],
    'nonprofit': [
        {
            company: 'Girls.js',
            roles: [
                {
                    role: 'Tutor (voulenteer)',
                    started: '2017',
                    ended: 'now',
                    description: 'Teaching girls basics of JavaScript on one-day-long workshops regular series.'
                }
            ]
        },
        {
            company: 'Fenix Foundation',
            roles: [
                {
                    role: 'Cofounder / Director of Computer Science Department',
                    started: '2015',
                    ended: '2017',
                    description: 'Cofounded foundation for the best High School students, teaching them physics and computer science beyond schools programme. Responsible for organizing and managing Computer Science department, finding and onboarding teachers, scheduling and promoting lectures.'
                }
            ]
        },
        {
            company: 'Great Orchestra of Christmas Charity',
            roles: [
                {
                    role: 'Peace Patrol member (voulenteer)',
                    started: '2009',
                    ended: 'now',
                    description: 'Volunteer in the biggest annual charity fundraising and on Woodstock Festival'
                }
            ]
        },
]
};

const dateRange = (role) => {
    if (role.ended) {
        return `${role.started} - ${role.ended}`
    } else {
        return role.started;
    }
}

const altMarkup = (data) => data.map(experience => (`
<li class="section-detail">
    <div class="alt-detail-header">
        <h2>${experience.company}</h2>
        <div class="time-range">${dateRange(experience.roles[0])}</div>
    </div>
    <div class="alt-role">${experience.roles[0].role}</div>
    <div>${experience.roles[0].description}</div>
</li>
`)).join('');

const config = [
    {
        key: 'experience',
        targetId: 'experience-target',
    },
    {
        key: 'education',
        targetId: 'education-target',
        renderFn: altMarkup 
    },
    {
        key: 'nonprofit',
        targetId: 'nonprofit-target',
        renderFn: altMarkup 
    },
    {
        key: 'awards',
        targetId: 'awards-target',
        renderFn: altMarkup 
    }
]

const makeRole = role => (`
<li class="single-role">
    <div class="time-range">${role.started} - ${role.ended}</div>
    <div class="role-info">
        <h3>${role.role}</h3>
        <p>${role.description}</p>
    </div>
    <div class="hashtags-info">
        ${(role.hashtags || []).join(', ')}
    </div>
</li>`)

const makeMarkup = (data) => data.map(experience => (`
    <li class="section-detail">
        <h2>${experience.company}</h2>
        <ul class="section-subdetails">
            ${experience.roles.map(makeRole).join('')}
        </ul>
    </li>
`)).join('');

config.forEach(c => {
    const target = document.getElementById(c.targetId);
    let fn = makeMarkup;
    if (c.renderFn) {
        fn = c.renderFn;
    }
    target.insertAdjacentHTML('afterbegin', fn(me[c.key]));
})