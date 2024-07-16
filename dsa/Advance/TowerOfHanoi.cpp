#include <bits/stdc++.h>
using namespace std;

void moveDisk(int n, char source, char destination, char auxiliary) {
    if (n == 1) {
        cout << "Move disk 1 from " << source << " to " << destination << endl;
        return;
    }
    moveDisk(n - 1, source, auxiliary, destination);
    cout << "Move disk " << n << " from " << source << " to " << destination << endl;
    moveDisk(n - 1, auxiliary, destination, source);
}

int main() {
    int disks;

    cout << "Enter the number of disks: ";
    cin >> disks;

    cout << "The sequence of moves involved in the Tower of Hanoi are:" << endl;
    moveDisk(disks, 'A', 'C', 'B'); 

    return 0;
}
