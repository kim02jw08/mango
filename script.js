// 투두리스트 애플리케이션
class TodoApp {
    constructor() {
        this.todos = [];
        this.currentDate = new Date();
        this.editingId = null;
        
        this.init();
    }

    init() {
        this.loadTodos();
        this.checkOverdueTodos();
        this.bindEvents();
        this.renderListView();
        this.renderCalendar();
    }

    // 이벤트 바인딩
    bindEvents() {
        // 할일 추가
        document.getElementById('addTodoBtn').addEventListener('click', () => this.addTodo());
        document.getElementById('todoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        // 뷰 전환
        document.getElementById('listViewBtn').addEventListener('click', () => this.switchView('list'));
        document.getElementById('calendarViewBtn').addEventListener('click', () => this.switchView('calendar'));

        // 달력 네비게이션
        document.getElementById('prevMonth').addEventListener('click', () => this.changeMonth(-1));
        document.getElementById('nextMonth').addEventListener('click', () => this.changeMonth(1));

        // 모달 이벤트
        document.getElementById('saveEditBtn').addEventListener('click', () => this.saveEdit());
        document.getElementById('cancelEditBtn').addEventListener('click', () => this.closeModal());
        document.getElementById('editModal').addEventListener('click', (e) => {
            if (e.target.id === 'editModal') this.closeModal();
        });

        // ESC 키로 모달 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !document.getElementById('editModal').classList.contains('hidden')) {
                this.closeModal();
            }
        });

        // 모달 내에서 Enter 키로 저장
        document.getElementById('editTodoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.saveEdit();
        });
        document.getElementById('editTodoDate').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.saveEdit();
        });

        // 오늘 날짜로 기본 설정
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('todoDate').value = today;
    }

    // 할일 추가
    addTodo() {
        const input = document.getElementById('todoInput');
        const dateInput = document.getElementById('todoDate');
        const text = input.value.trim();
        const date = dateInput.value;

        if (!text) {
            alert('할일을 입력해주세요!');
            return;
        }

        if (!date) {
            alert('날짜를 선택해주세요!');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            date: date,
            completed: false,
            failed: false,
            createdAt: new Date().toISOString()
        };

        this.todos.push(todo);
        this.checkOverdueTodos();
        this.saveTodos();
        this.renderListView();
        this.renderCalendar();

        input.value = '';
        input.focus();
    }

    // 기한이 지난 할일 체크
    checkOverdueTodos() {
        const today = new Date().toISOString().split('T')[0];
        
        this.todos.forEach(todo => {
            if (!todo.completed && !todo.failed && todo.date < today) {
                todo.failed = true;
            }
        });
    }

    // 할일 완료 토글
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            // 완료되면 실패 상태 해제
            if (todo.completed) {
                todo.failed = false;
            }
            this.saveTodos();
            this.renderListView();
            this.renderCalendar();
        }
    }

    // 할일 실패 토글
    toggleFailed(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.failed = !todo.failed;
            // 실패되면 완료 상태 해제
            if (todo.failed) {
                todo.completed = false;
            }
            this.saveTodos();
            this.renderListView();
            this.renderCalendar();
        }
    }

    // 할일 수정
    editTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            this.editingId = id;
            document.getElementById('editTodoInput').value = todo.text;
            document.getElementById('editTodoDate').value = todo.date;
            document.getElementById('editModal').classList.remove('hidden');
            document.getElementById('editTodoInput').focus();
        }
    }

    // 수정 저장
    saveEdit() {
        const text = document.getElementById('editTodoInput').value.trim();
        const date = document.getElementById('editTodoDate').value;

        if (!text) {
            alert('할일을 입력해주세요!');
            document.getElementById('editTodoInput').focus();
            return;
        }

        if (!date) {
            alert('날짜를 선택해주세요!');
            document.getElementById('editTodoDate').focus();
            return;
        }

        const todo = this.todos.find(t => t.id === this.editingId);
        if (todo) {
            todo.text = text;
            todo.date = date;
            // 수정 후 실패 상태 체크
            this.checkOverdueTodos();
            this.saveTodos();
            this.renderListView();
            this.renderCalendar();
            this.closeModal();
        } else {
            alert('수정할 할일을 찾을 수 없습니다.');
            this.closeModal();
        }
    }

    // 모달 닫기
    closeModal() {
        document.getElementById('editModal').classList.add('hidden');
        this.editingId = null;
    }

    // 할일 삭제
    deleteTodo(id) {
        if (confirm('정말로 삭제하시겠습니까?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveTodos();
            this.renderListView();
            this.renderCalendar();
        }
    }

    // 뷰 전환
    switchView(view) {
        const listView = document.getElementById('listView');
        const calendarView = document.getElementById('calendarView');
        const listBtn = document.getElementById('listViewBtn');
        const calendarBtn = document.getElementById('calendarViewBtn');

        if (view === 'list') {
            listView.classList.remove('hidden');
            calendarView.classList.add('hidden');
            listBtn.classList.add('active');
            calendarBtn.classList.remove('active');
        } else {
            listView.classList.add('hidden');
            calendarView.classList.remove('hidden');
            listBtn.classList.remove('active');
            calendarBtn.classList.add('active');
        }
    }

    // 리스트 뷰 렌더링
    renderListView() {
        const todoList = document.getElementById('todoList');
        todoList.innerHTML = '';

        if (this.todos.length === 0) {
            todoList.innerHTML = '<li style="text-align: center; padding: 40px; color: #999; font-style: italic;">아직 할일이 없습니다. 새로운 할일을 추가해보세요!</li>';
            return;
        }

        // 날짜순으로 정렬
        const sortedTodos = [...this.todos].sort((a, b) => {
            if (a.date === b.date) {
                return new Date(a.createdAt) - new Date(b.createdAt);
            }
            return new Date(a.date) - new Date(b.date);
        });

        sortedTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''} ${todo.failed ? 'failed' : ''}`;
            
            const dateObj = new Date(todo.date);
            const formattedDate = dateObj.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'short'
            });

            const statusText = todo.completed ? '완료' : todo.failed ? '실패' : '미완료';
            const statusClass = todo.completed ? 'completed' : todo.failed ? 'failed' : '';

            li.innerHTML = `
                <div class="todo-content">
                    <div class="todo-text">${this.escapeHtml(todo.text)}</div>
                    <div class="todo-date">${formattedDate}</div>
                    <div class="todo-status ${statusClass}">${statusText}</div>
                </div>
                <div class="todo-actions">
                    <button class="todo-btn complete-btn" onclick="app.toggleTodo(${todo.id})">
                        ${todo.completed ? '완료취소' : '완료'}
                    </button>
                    <button class="todo-btn fail-btn" onclick="app.toggleFailed(${todo.id})">
                        ${todo.failed ? '실패취소' : '실패'}
                    </button>
                    <button class="todo-btn edit-btn" onclick="app.editTodo(${todo.id})">수정</button>
                    <button class="todo-btn delete-btn" onclick="app.deleteTodo(${todo.id})">삭제</button>
                </div>
            `;
            
            todoList.appendChild(li);
        });
    }

    // 달력 뷰 렌더링
    renderCalendar() {
        const currentMonth = document.getElementById('currentMonth');
        const calendarDays = document.getElementById('calendarDays');
        
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        // 해당 월의 할일 개수 계산
        const monthTodos = this.getTodosForMonth(year, month);
        const todoCount = monthTodos.length;
        const statusText = todoCount < 10 ? '부족함' : '충족함';
        const statusClass = todoCount < 10 ? 'insufficient' : 'sufficient';
        
        currentMonth.innerHTML = `
            <span>${year}년 ${month + 1}월</span>
            <div class="month-status ${statusClass}">${statusText} (${todoCount}개)</div>
        `;
        
        // 달력 생성
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());
        
        calendarDays.innerHTML = '';
        
        // 6주 * 7일 = 42일 표시
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            
            if (date.getMonth() !== month) {
                dayElement.classList.add('other-month');
            }
            
            const today = new Date();
            if (date.toDateString() === today.toDateString()) {
                dayElement.classList.add('today');
            }
            
            // 해당 날짜의 할일 상태 확인
            const dateStr = date.toISOString().split('T')[0];
            const todosForDate = this.todos.filter(todo => todo.date === dateStr);
            
            if (todosForDate.length > 0) {
                const hasCompleted = todosForDate.some(todo => todo.completed);
                const hasFailed = todosForDate.some(todo => todo.failed);
                const allCompleted = todosForDate.every(todo => todo.completed);
                const allFailed = todosForDate.every(todo => todo.failed);
                
                if (allCompleted && todosForDate.length > 0) {
                    dayElement.classList.add('all-completed');
                } else if (allFailed && todosForDate.length > 0) {
                    dayElement.classList.add('all-failed');
                } else if (hasCompleted && hasFailed) {
                    dayElement.classList.add('mixed-status');
                } else if (hasCompleted) {
                    dayElement.classList.add('has-completed');
                } else if (hasFailed) {
                    dayElement.classList.add('has-failed');
                }
            }
            
            dayElement.innerHTML = `
                <div class="day-number">${date.getDate()}</div>
                <div class="day-todos">${this.getTodosForDate(date)}</div>
            `;
            
            calendarDays.appendChild(dayElement);
        }
    }

    // 특정 날짜의 할일들 가져오기
    getTodosForDate(date) {
        const dateStr = date.toISOString().split('T')[0];
        const todosForDate = this.todos.filter(todo => todo.date === dateStr);
        
        if (todosForDate.length === 0) {
            return '';
        }
        
        return todosForDate.map(todo => 
            `<div class="todo-preview ${todo.completed ? 'completed' : ''} ${todo.failed ? 'failed' : ''}">${this.escapeHtml(todo.text)}</div>`
        ).join('');
    }

    // 특정 월의 할일들 가져오기
    getTodosForMonth(year, month) {
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0);
        
        return this.todos.filter(todo => {
            const todoDate = new Date(todo.date);
            return todoDate >= startDate && todoDate <= endDate;
        });
    }

    // 달력 월 변경
    changeMonth(direction) {
        this.currentDate.setMonth(this.currentDate.getMonth() + direction);
        this.renderCalendar();
    }

    // HTML 이스케이프
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // 로컬스토리지에서 할일 불러오기
    loadTodos() {
        const saved = localStorage.getItem('todos');
        if (saved) {
            try {
                this.todos = JSON.parse(saved);
            } catch (e) {
                console.error('할일 데이터를 불러오는데 실패했습니다:', e);
                this.todos = [];
            }
        }
    }

    // 로컬스토리지에 할일 저장
    saveTodos() {
        try {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        } catch (e) {
            console.error('할일 데이터를 저장하는데 실패했습니다:', e);
        }
    }
}

// 애플리케이션 초기화
const app = new TodoApp();
