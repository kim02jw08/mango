// 여행지 데이터베이스 (실제 여행지와 관련된 이미지 사용)
const travelData = {
    japan: {
        name: '일본',
        photos: [
            { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&h=300&fit=crop&q=80', caption: '도쿄 스카이트리' },
            { url: 'https://images.unsplash.com/photo-1542640244-a96c4a0b0f8a?w=500&h=300&fit=crop&q=80', caption: '후지산' },
            { url: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=500&h=300&fit=crop&q=80', caption: '교토 기요미즈데라' },
            { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&q=80', caption: '오사카 성' }
        ],
        restaurants: [
            { 
                name: '스시 사이토', 
                description: '미슐랭 3스타 스시집', 
                rating: 5, 
                price: '고급',
                image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=300&fit=crop&q=80',
                time: '12:00-14:00'
            },
            { 
                name: '라멘 이치란', 
                description: '유명한 돈코츠 라멘집', 
                rating: 4.5, 
                price: '중급',
                image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop&q=80',
                time: '18:00-20:00'
            },
            { 
                name: '타코야키 무라카미', 
                description: '오사카 대표 길거리 음식', 
                rating: 4, 
                price: '저렴',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '15:00-16:00'
            },
            { 
                name: '우나기 우노', 
                description: '전통 장어구이 전문점', 
                rating: 4.5, 
                price: '중급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '19:00-21:00'
            },
            { 
                name: '오마카세 스시', 
                description: '도쿄 신주쿠 오마카세', 
                rating: 4.8, 
                price: '고급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '19:30-21:30'
            },
            { 
                name: '교토 가이세키', 
                description: '전통 교토 정찬', 
                rating: 4.7, 
                price: '고급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '12:30-14:30'
            },
            { 
                name: '오사카 오코노미야키', 
                description: '오사카 대표 오코노미야키', 
                rating: 4.3, 
                price: '저렴',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '17:30-19:00'
            },
            { 
                name: '도쿄 이자카야', 
                description: '전통 일본 선술집', 
                rating: 4.4, 
                price: '중급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '20:00-22:00'
            }
        ],
        attractions: [
            { 
                name: '도쿄 디즈니랜드', 
                description: '세계적인 테마파크', 
                type: '테마파크',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '09:00-18:00'
            },
            { 
                name: '센소지 절', 
                description: '도쿄 최고의 전통 절', 
                type: '종교',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '10:00-12:00'
            },
            { 
                name: '기요미즈데라', 
                description: '교토의 유네스코 세계문화유산', 
                type: '문화',
                image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=300&h=300&fit=crop&q=80',
                time: '14:00-16:00'
            },
            { 
                name: '오사카 성', 
                description: '일본 3대 명성 중 하나', 
                type: '역사',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '11:00-13:00'
            },
            { 
                name: '후지산', 
                description: '일본의 상징적인 산', 
                type: '자연',
                image: 'https://images.unsplash.com/photo-1542640244-a96c4a0b0f8a?w=300&h=300&fit=crop&q=80',
                time: '06:00-12:00'
            },
            { 
                name: '도쿄 스카이트리', 
                description: '세계에서 두 번째로 높은 타워', 
                type: '관광',
                image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=300&fit=crop&q=80',
                time: '19:00-21:00'
            },
            { 
                name: '교토 금각사', 
                description: '유네스코 세계문화유산', 
                type: '문화',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '09:00-17:00'
            },
            { 
                name: '도쿄 국립박물관', 
                description: '일본 최대의 박물관', 
                type: '문화',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '10:00-16:00'
            },
            { 
                name: '오사카 유니버설 스튜디오', 
                description: '해리포터 테마파크', 
                type: '테마파크',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '09:00-19:00'
            },
            { 
                name: '교토 아라시야마', 
                description: '대나무 숲과 전통 마을', 
                type: '자연',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '08:00-18:00'
            }
        ],
        accommodations: [
            { 
                name: '파크 하이어트 도쿄', 
                description: '5성급 호텔, 도쿄 중심가', 
                price: 300000, 
                rating: 4.8,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '교토 리츠칼튼', 
                description: '전통과 현대가 만나는 호텔', 
                price: 250000, 
                rating: 4.7,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '오사카 마리오트 미야코', 
                description: '오사카 중심가 럭셔리 호텔', 
                price: 200000, 
                rating: 4.6,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '도쿄 게스트하우스', 
                description: '합리적인 가격의 게스트하우스', 
                price: 80000, 
                rating: 4.2,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            }
        ],
        dailyBudget: {
            accommodation: 150000,
            food: 80000,
            transport: 30000,
            activities: 50000
        }
    },
    korea: {
        name: '한국',
        photos: [
            { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&q=80', caption: '경복궁' },
            { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&q=80', caption: '제주도 한라산' },
            { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&q=80', caption: '부산 감천문화마을' },
            { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&q=80', caption: '서울 N서울타워' }
        ],
        restaurants: [
            { 
                name: '광화문 한정식', 
                description: '전통 한정식 전문점', 
                rating: 4.5, 
                price: '중급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '12:00-14:00'
            },
            { 
                name: '명동 교자', 
                description: '유명한 교자 전문점', 
                rating: 4, 
                price: '저렴',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '18:00-20:00'
            },
            { 
                name: '부산 돼지국밥', 
                description: '부산 대표 음식', 
                rating: 4.5, 
                price: '저렴',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '19:00-21:00'
            },
            { 
                name: '제주 흑돼지', 
                description: '제주도 특산물 흑돼지', 
                rating: 4.8, 
                price: '중급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '20:00-22:00'
            }
        ],
        attractions: [
            { 
                name: '경복궁', 
                description: '조선왕조의 대표 궁궐', 
                type: '역사',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '09:00-17:00'
            },
            { 
                name: '한라산', 
                description: '제주도 최고봉', 
                type: '자연',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '06:00-12:00'
            },
            { 
                name: '감천문화마을', 
                description: '부산의 컬러풀한 마을', 
                type: '문화',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '14:00-16:00'
            },
            { 
                name: 'N서울타워', 
                description: '서울의 랜드마크', 
                type: '관광',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '19:00-21:00'
            }
        ],
        accommodations: [
            { 
                name: '롯데호텔 서울', 
                description: '5성급 호텔, 명동 중심가', 
                price: 200000, 
                rating: 4.7,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '신라호텔 제주', 
                description: '제주도 럭셔리 리조트', 
                price: 300000, 
                rating: 4.8,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '부산 파크하이어트', 
                description: '부산 해운대 호텔', 
                price: 180000, 
                rating: 4.6,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '게스트하우스 서울', 
                description: '홍대 근처 게스트하우스', 
                price: 50000, 
                rating: 4.1,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            }
        ],
        dailyBudget: {
            accommodation: 100000,
            food: 50000,
            transport: 20000,
            activities: 30000
        }
    },
    thailand: {
        name: '태국',
        photos: [
            { url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&h=300&fit=crop&q=80', caption: '방콕 왓 포' },
            { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&q=80', caption: '푸켓 해변' },
            { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&q=80', caption: '치앙마이 사원' },
            { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&q=80', caption: '코사무이 섬' }
        ],
        restaurants: [
            { 
                name: '나와트', 
                description: '미슐랭 가이드 수상 태국요리', 
                rating: 4.8, 
                price: '고급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '12:00-14:00'
            },
            { 
                name: '제이옥', 
                description: '유명한 팟타이 전문점', 
                rating: 4.5, 
                price: '저렴',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '18:00-20:00'
            },
            { 
                name: '푸켓 시장', 
                description: '신선한 해산물 시장', 
                rating: 4.2, 
                price: '저렴',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '19:00-21:00'
            },
            { 
                name: '치앙마이 카페', 
                description: '전통 커피와 디저트', 
                rating: 4.3, 
                price: '저렴',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '15:00-16:00'
            }
        ],
        attractions: [
            { 
                name: '왓 포', 
                description: '방콕의 유명한 사원', 
                type: '종교',
                image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=300&h=300&fit=crop&q=80',
                time: '09:00-17:00'
            },
            { 
                name: '푸켓 해변', 
                description: '세계적인 휴양지', 
                type: '자연',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '10:00-18:00'
            },
            { 
                name: '치앙마이 사원', 
                description: '북부 태국의 전통 사원', 
                type: '종교',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '08:00-12:00'
            },
            { 
                name: '코사무이', 
                description: '남부 태국의 아름다운 섬', 
                type: '자연',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '09:00-17:00'
            }
        ],
        accommodations: [
            { 
                name: '방콕 메리어트', 
                description: '5성급 호텔, 방콕 중심가', 
                price: 120000, 
                rating: 4.6,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '푸켓 리조트', 
                description: '해변가 럭셔리 리조트', 
                price: 150000, 
                rating: 4.7,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '치앙마이 게스트하우스', 
                description: '전통 게스트하우스', 
                price: 40000, 
                rating: 4.3,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '코사무이 비치 호텔', 
                description: '해변가 호텔', 
                price: 80000, 
                rating: 4.4,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            }
        ],
        dailyBudget: {
            accommodation: 80000,
            food: 30000,
            transport: 15000,
            activities: 25000
        }
    },
    france: {
        name: '프랑스',
        photos: [
            { url: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=300&fit=crop&q=80', caption: '에펠탑' },
            { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&q=80', caption: '루브르 박물관' },
            { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&q=80', caption: '몽생미셸' },
            { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&q=80', caption: '베르사유 궁전' }
        ],
        restaurants: [
            { 
                name: '르 콩코르드', 
                description: '미슐랭 3스타 레스토랑', 
                rating: 5, 
                price: '고급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '12:00-14:00'
            },
            { 
                name: '카페 드 플로르', 
                description: '파리 유명 카페', 
                rating: 4.5, 
                price: '중급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '15:00-17:00'
            },
            { 
                name: '브라세리 리포', 
                description: '전통 프랑스 브라세리', 
                rating: 4.3, 
                price: '중급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '19:00-21:00'
            },
            { 
                name: '크레페 브레통', 
                description: '전통 크레페 전문점', 
                rating: 4.2, 
                price: '저렴',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '16:00-18:00'
            }
        ],
        attractions: [
            { 
                name: '에펠탑', 
                description: '파리의 상징', 
                type: '관광',
                image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=300&h=300&fit=crop&q=80',
                time: '09:00-23:00'
            },
            { 
                name: '루브르 박물관', 
                description: '세계 최대 미술관', 
                type: '문화',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '09:00-18:00'
            },
            { 
                name: '몽생미셸', 
                description: '노르망디의 유명한 수도원', 
                type: '종교',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '09:00-19:00'
            },
            { 
                name: '베르사유 궁전', 
                description: '루이 14세의 궁전', 
                type: '역사',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '09:00-18:30'
            }
        ],
        accommodations: [
            { 
                name: '리츠 파리', 
                description: '5성급 호텔, 샹젤리제', 
                price: 400000, 
                rating: 4.9,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '호텔 드 크릴론', 
                description: '루브르 근처 럭셔리 호텔', 
                price: 350000, 
                rating: 4.8,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '몽생미셸 호텔', 
                description: '몽생미셸 근처 호텔', 
                price: 150000, 
                rating: 4.4,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '파리 게스트하우스', 
                description: '몽마르트 게스트하우스', 
                price: 80000, 
                rating: 4.2,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            }
        ],
        dailyBudget: {
            accommodation: 200000,
            food: 100000,
            transport: 50000,
            activities: 80000
        }
    },
    usa: {
        name: '미국',
        photos: [
            { url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=300&fit=crop&q=80', caption: '뉴욕 타임스퀘어' },
            { url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&h=300&fit=crop&q=80', caption: '그랜드 캐니언' },
            { url: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=300&fit=crop&q=80', caption: '자유의 여신상' },
            { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&q=80', caption: '라스베가스' }
        ],
        restaurants: [
            { 
                name: '뉴욕 스테이크하우스', 
                description: '프리미엄 스테이크 레스토랑', 
                rating: 4.8, 
                price: '고급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '19:00-22:00'
            },
            { 
                name: 'LA 타코 트럭', 
                description: '로스앤젤레스 유명 타코', 
                rating: 4.5, 
                price: '저렴',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '12:00-15:00'
            },
            { 
                name: '시카고 딥디시 피자', 
                description: '시카고 대표 피자', 
                rating: 4.6, 
                price: '중급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '18:00-21:00'
            },
            { 
                name: '뉴올리언스 제이미', 
                description: '전통 루이지애나 요리', 
                rating: 4.4, 
                price: '중급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '19:30-22:00'
            },
            { 
                name: '샌프란시스코 시푸드', 
                description: '신선한 해산물 레스토랑', 
                rating: 4.7, 
                price: '고급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '18:30-21:30'
            },
            { 
                name: '텍사스 바베큐', 
                description: '전통 텍사스 바베큐', 
                rating: 4.5, 
                price: '중급',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '17:00-20:00'
            }
        ],
        attractions: [
            { 
                name: '자유의 여신상', 
                description: '뉴욕의 상징', 
                type: '관광',
                image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=300&h=300&fit=crop&q=80',
                time: '09:00-17:00'
            },
            { 
                name: '그랜드 캐니언', 
                description: '세계 7대 자연경관', 
                type: '자연',
                image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=300&fit=crop&q=80',
                time: '06:00-18:00'
            },
            { 
                name: '타임스퀘어', 
                description: '뉴욕의 중심가', 
                type: '관광',
                image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&h=300&fit=crop&q=80',
                time: '19:00-23:00'
            },
            { 
                name: '할리우드', 
                description: 'LA의 영화 산업 중심지', 
                type: '문화',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '10:00-18:00'
            },
            { 
                name: '라스베가스 스트립', 
                description: '세계적인 카지노 도시', 
                type: '관광',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '20:00-02:00'
            },
            { 
                name: '요세미티 국립공원', 
                description: '캘리포니아의 아름다운 자연', 
                type: '자연',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '08:00-17:00'
            },
            { 
                name: '월트 디즈니 월드', 
                description: '플로리다의 거대한 테마파크', 
                type: '테마파크',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '09:00-22:00'
            },
            { 
                name: '니아가라 폭포', 
                description: '세계 3대 폭포', 
                type: '자연',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80',
                time: '09:00-19:00'
            }
        ],
        accommodations: [
            { 
                name: '뉴욕 플라자 호텔', 
                description: '5성급 호텔, 센트럴 파크 근처', 
                price: 400000, 
                rating: 4.8,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: 'LA 비벌리 힐스 호텔', 
                description: '할리우드 스타들이 머무는 호텔', 
                price: 350000, 
                rating: 4.7,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '라스베가스 벨라지오', 
                description: '세계적인 카지노 리조트', 
                price: 200000, 
                rating: 4.6,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            },
            { 
                name: '시카고 게스트하우스', 
                description: '시카고 중심가 게스트하우스', 
                price: 100000, 
                rating: 4.2,
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80'
            }
        ],
        dailyBudget: {
            accommodation: 250000,
            food: 120000,
            transport: 80000,
            activities: 100000
        }
    }
};

// DOM 요소들
const countrySelect = document.getElementById('country');
const daysInput = document.getElementById('days');
const generateBtn = document.getElementById('generatePlan');
const loading = document.getElementById('loading');
const travelPlan = document.getElementById('travelPlan');
const prevDayBtn = document.getElementById('prevDay');
const nextDayBtn = document.getElementById('nextDay');
const currentDaySpan = document.getElementById('currentDay');
const totalDaysSpan = document.getElementById('totalDays');
const timelineContent = document.getElementById('timelineContent');

// 전역 변수
let currentDay = 1;
let totalDays = 1;
let timelineData = [];

// 이벤트 리스너
generateBtn.addEventListener('click', generateTravelPlan);
prevDayBtn.addEventListener('click', () => changeDay(currentDay - 1));
nextDayBtn.addEventListener('click', () => changeDay(currentDay + 1));

// 여행 계획 생성 함수
async function generateTravelPlan() {
    const country = countrySelect.value;
    const days = parseInt(daysInput.value);

    if (!country || !days || days < 1) {
        alert('국가와 여행 일수를 올바르게 입력해주세요.');
        return;
    }

    // 즉시 로딩 표시
    showLoading();

    // 비동기로 여행 계획 생성 (더 빠른 처리)
    setTimeout(() => {
        const plan = createTravelPlan(country, days);
        displayTravelPlan(plan);
        hideLoading();
    }, 300); // 0.3초로 단축
}

// 로딩 표시
function showLoading() {
    loading.classList.remove('hidden');
    travelPlan.classList.add('hidden');
    generateBtn.disabled = true;
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 생성 중...';
}

// 로딩 숨기기
function hideLoading() {
    loading.classList.add('hidden');
    travelPlan.classList.remove('hidden');
    generateBtn.disabled = false;
    generateBtn.innerHTML = '<i class="fas fa-magic"></i> 여행 계획 생성하기';
}

// 여행 계획 생성
function createTravelPlan(country, days) {
    const data = travelData[country];
    if (!data) {
        throw new Error('선택한 국가의 데이터를 찾을 수 없습니다.');
    }

    // 타임라인 데이터 생성
    timelineData = generateTimelineData(data, days);

    return {
        country: data.name,
        days: days,
        budget: calculateBudget(data.dailyBudget, days)
    };
}

// 타임라인 데이터 생성
function generateTimelineData(data, days) {
    const timeline = [];
    const usedAttractions = new Set();
    const usedRestaurants = new Set();
    
    for (let day = 1; day <= days; day++) {
        const dayData = {
            day: day,
            date: getDateString(day),
            schedule: []
        };

        // 숙소 (첫날과 마지막날만)
        if (day === 1 || day === days) {
            const accommodation = data.accommodations[Math.floor(Math.random() * data.accommodations.length)];
            dayData.schedule.push({
                type: 'accommodation',
                time: day === 1 ? '체크인' : '체크아웃',
                ...accommodation
            });
        }

        // 관광지 (하루에 2-3개, 중복 방지)
        const availableAttractions = data.attractions.filter(attr => !usedAttractions.has(attr.name));
        const attractionCount = Math.min(3, Math.min(availableAttractions.length, 2));
        const selectedAttractions = getRandomItems(availableAttractions, attractionCount);
        selectedAttractions.forEach(attraction => {
            usedAttractions.add(attraction.name);
            dayData.schedule.push({
                type: 'attraction',
                ...attraction
            });
        });

        // 맛집 (하루에 2-3개, 중복 방지)
        const availableRestaurants = data.restaurants.filter(rest => !usedRestaurants.has(rest.name));
        const restaurantCount = Math.min(3, Math.min(availableRestaurants.length, 2));
        const selectedRestaurants = getRandomItems(availableRestaurants, restaurantCount);
        selectedRestaurants.forEach(restaurant => {
            usedRestaurants.add(restaurant.name);
            dayData.schedule.push({
                type: 'restaurant',
                ...restaurant
            });
        });

        // 시간순으로 정렬
        dayData.schedule.sort((a, b) => {
            const timeA = a.time ? parseInt(a.time.split(':')[0]) : 0;
            const timeB = b.time ? parseInt(b.time.split(':')[0]) : 0;
            return timeA - timeB;
        });

        timeline.push(dayData);
    }

    console.log('Generated timeline data:', timeline);
    return timeline;
}

// 랜덤 아이템 선택
function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 날짜 문자열 생성
function getDateString(day) {
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + day - 1);
    
    const month = targetDate.getMonth() + 1;
    const date = targetDate.getDate();
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][targetDate.getDay()];
    
    return `${month}월 ${date}일 (${dayOfWeek})`;
}

// 예산 계산
function calculateBudget(dailyBudget, days) {
    const total = {
        accommodation: dailyBudget.accommodation * days,
        food: dailyBudget.food * days,
        transport: dailyBudget.transport * days,
        activities: dailyBudget.activities * days
    };
    
    total.total = total.accommodation + total.food + total.transport + total.activities;
    
    return total;
}

// 여행 계획 표시
function displayTravelPlan(plan) {
    // 제목 설정
    document.getElementById('planTitle').textContent = `${plan.country} ${plan.days}일 여행 계획`;
    document.getElementById('planCountry').textContent = plan.country;
    document.getElementById('planDays').textContent = `${plan.days}일`;

    // 타임라인 설정
    totalDays = plan.days;
    currentDay = 1;
    totalDaysSpan.textContent = totalDays;
    currentDaySpan.textContent = currentDay;
    
    // 네비게이션 버튼 상태 업데이트
    updateNavigationButtons();
    
    // 첫 번째 날 표시
    displayDay(currentDay);

    // 예산 표시
    displayBudget(plan.budget);
}

// 날짜 변경
function changeDay(day) {
    if (day < 1 || day > totalDays) return;
    
    currentDay = day;
    currentDaySpan.textContent = currentDay;
    updateNavigationButtons();
    displayDay(day);
}

// 네비게이션 버튼 상태 업데이트
function updateNavigationButtons() {
    prevDayBtn.disabled = currentDay === 1;
    nextDayBtn.disabled = currentDay === totalDays;
}

// 특정 날짜 표시
function displayDay(day) {
    const dayData = timelineData[day - 1];
    if (!dayData) {
        console.error(`Day ${day} data not found`);
        return;
    }

    timelineContent.innerHTML = `
        <div class="timeline-card">
            <div class="day-header">
                <h3 class="day-title">${day}일차</h3>
                <span class="day-date">${dayData.date}</span>
            </div>
            <div class="day-schedule">
                ${dayData.schedule.map(item => createScheduleItem(item)).join('')}
            </div>
        </div>
    `;
    
    // active 클래스 추가하여 표시
    timelineContent.classList.add('active');
}

// 스케줄 아이템 생성
function createScheduleItem(item) {
    const ratingStars = '★'.repeat(Math.floor(item.rating)) + '☆'.repeat(5 - Math.floor(item.rating));
    
    return `
        <div class="schedule-item ${item.type}">
            <img src="${item.image}" alt="${item.name}" class="schedule-image" onerror="this.src='https://via.placeholder.com/300x300/667eea/ffffff?text=이미지+로딩+중'">
            <div class="schedule-content">
                <div class="schedule-time">${item.time || ''}</div>
                <h4 class="schedule-title">${item.name}</h4>
                <p class="schedule-description">${item.description}</p>
                ${item.rating ? `
                    <div class="schedule-rating">
                        <span>${ratingStars}</span>
                        <span>${item.rating}/5</span>
                    </div>
                ` : ''}
                ${item.price ? `<div class="schedule-price">${item.price}</div>` : ''}
                ${item.price && typeof item.price === 'number' ? `<div class="schedule-price">₩${item.price.toLocaleString()}/박</div>` : ''}
            </div>
        </div>
    `;
}

// 예산 표시
function displayBudget(budget) {
    const budgetContainer = document.getElementById('budget');
    budgetContainer.innerHTML = '';

    const budgetItems = [
        { name: '숙박비', amount: budget.accommodation },
        { name: '식비', amount: budget.food },
        { name: '교통비', amount: budget.transport },
        { name: '활동비', amount: budget.activities }
    ];

    budgetItems.forEach(item => {
        const budgetItem = document.createElement('div');
        budgetItem.className = 'budget-item';
        budgetItem.innerHTML = `
            <h4>${item.name}</h4>
            <div class="amount">₩${item.amount.toLocaleString()}</div>
            <div class="currency">원</div>
        `;
        budgetContainer.appendChild(budgetItem);
    });

    // 총 예산
    const totalBudget = document.createElement('div');
    totalBudget.className = 'total-budget';
    totalBudget.innerHTML = `
        <h3>총 예상 예산</h3>
        <div class="amount">₩${budget.total.toLocaleString()}</div>
        <div class="currency">원</div>
    `;
    budgetContainer.appendChild(totalBudget);
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 기본값 설정
    countrySelect.value = '';
    daysInput.value = '';
});