// My Test Project - JavaScript

// 페이지 로드 완료 후 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function() {
    // 버튼 요소들 가져오기
    const clickButton = document.getElementById('click-button');
    const refreshButton = document.getElementById('refresh-button');
    
    // 클릭 버튼 이벤트 리스너
    if (clickButton) {
        clickButton.addEventListener('click', function() {
            showNotification('안녕하세요! 버튼이 클릭되었습니다! 🎉', 'success');
        });
    }
    
    // 새로고침 버튼 이벤트 리스너
    if (refreshButton) {
        refreshButton.addEventListener('click', function() {
            showNotification('페이지를 새로고침합니다...', 'info');
            setTimeout(function() {
                window.location.reload();
            }, 1000);
        });
    }
});

// 알림 메시지 표시 함수
function showNotification(message, type = 'success') {
    // 기존 알림이 있다면 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // 컨테이너에 알림 추가
    const container = document.querySelector('.container');
    container.appendChild(notification);
    
    // 알림 표시 (애니메이션)
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // 3초 후 알림 제거
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 유틸리티 함수들
const utils = {
    // 요소 선택 헬퍼
    select: function(selector) {
        return document.querySelector(selector);
    },
    
    // 모든 요소 선택 헬퍼
    selectAll: function(selector) {
        return document.querySelectorAll(selector);
    },
    
    // 클래스 토글 헬퍼
    toggleClass: function(element, className) {
        element.classList.toggle(className);
    }
};

// 전역에서 사용할 수 있도록 export (선택사항)
window.showNotification = showNotification;
window.utils = utils;