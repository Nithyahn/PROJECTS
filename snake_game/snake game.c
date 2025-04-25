#include <stdio.h>
#include <conio.h>
#include <windows.h>

int i, j, height = 20, width = 20;
int gameover, score;
int x, y, fruitX, fruitY, flag;

// Linked List to store the coordinates of the snake's body
struct node {
    int x, y;
    struct node* next;
};

struct node* head, *tail;

// Function to generate and display the game board
void setup() {
    gameover = 0;

    // Initialize snake's position and direction
    x = height / 2;
    y = width / 2;
    
    label1:
        fruitX = rand() % 20;
        if (fruitX == 0)
            goto label1;
    label2:
        fruitY = rand() % 20;
        if (fruitY == 0)
            goto label2;

    // Initialize score
    score = 0;

    // Initialize the snake as a single cell
    head = (struct node*)malloc(sizeof(struct node));
    head->x = x;
    head->y = y;
    head->next = NULL;

    // Initialize flag
    flag = 0;

    // Set the screen size
    system("cls");
}

// Function to draw the game board
void draw() {
    system("cls");
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
            if (i == 0 || i == width - 1
                || j == 0
                || j == height - 1) {
                printf("#");
            } else {
                if (i == x && j == y)
                    printf("0");
                else if (i == fruitX
                    && j == fruitY)
                    printf("*");
                else {
                    int isprint = 0;
                    struct node* current = head;
                    while (current != NULL) {
                        if (current->x == i
                            && current->y == j) {
                            printf("o");
                            isprint = 1;
                        }
                        current = current->next;
                    }
                    if (isprint == 0)
                        printf(" ");
                }
            }
        }
        printf("\n");
    }
    printf("score = %d", score);
    printf("\n");
    printf("press X to quit the game");
}

// Function to take user input
void input() {
    if (_kbhit()) {
        switch (_getch()) {
        case 'a':
            flag = 1;
            break;
        case 's':
            flag = 2;
            break;
        case 'd':
            flag = 3;
            break;
        case 'w':
            flag = 4;
            break;
        case 'x':
            gameover = 1;
            break;
        }
    }
}

// Function for logic behind each movement
void logic() {
    Sleep(0.01);
    struct node* prev, *temp;
    prev = NULL;
    temp = head;
    int prevX, prevY, prev2X, prev2Y;
    prevX = head->x;
    prevY = head->y;
    while (temp->next != NULL) {
        temp = temp->next;
        prev2X = temp->x;
        prev2Y = temp->y;
        temp->x = prevX;
        temp->y = prevY;
        prevX = prev2X;
        prevY = prev2Y;
    }
    switch (flag) {
    case 1:
        y--;
        break;
    case 2:
        x++;
        break;
    case 3:
        y++;
        break;
    case 4:
        x--;
        break;
    default:
        break;
    }
    if (x < 0
        || x > height
        || y < 0
        || y > width)
        gameover = 1;
    struct node* current = head->next;
    while (current != NULL) {
        if (current->x == x
            && current->y == y)
            gameover = 1;
        current = current->next;
    }
    if (x == fruitX
        && y == fruitY) {
        label3:
            fruitX = rand() % 20;
        if (fruitX == 0)
            goto label3;
        label4:
            fruitY = rand() % 20;
        if (fruitY == 0)
            goto label4;
        score += 10;
        struct node* newSegment = (struct node*)malloc(sizeof(struct node));
        newSegment->x = x;
        newSegment->y = y;
        newSegment->next = NULL;
        tail->next = newSegment;
        tail = newSegment;
    }
}

int main() {
    // Initialize the console window
    setup();
    while (!gameover) {
        // Draw the game board
        draw();
        // Take user input
        input();
        // Move the snake
        logic();
    }
    return 0;
}

