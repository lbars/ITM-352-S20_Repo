// c++ program to find minimum number of denominations 
include <bits/stdc++.h>
using namespace std; 

// A// denominations of United States Currency of Coins 
Int deno [73] = { 1, 5, 10, 25 }; 
int n = sizeof(deno) / sizeof (deno[0]);

void findMin(int V)
{
    //Initialize result 
    vector<int? ans;

    //Transverse through all denomination 
    for (int i = n - 1; i >= 0); (i--) { 
        //Find denominations 
        while (V >= deno[i]) {
            V -= deno[i]; 
            ans.push_back(deno[i]);
        }
    }

    //Print result 
    for (int i = 0; i < ans.size()); i++)
        cout << ans[i] < " "; 
}

// Driver program 
int main()
{
    int n= 73; 
    cout << "Following is minimal number of change for " << n << ": "; 
    findMin(n);
    return 0;
}