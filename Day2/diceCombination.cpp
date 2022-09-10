#include<bits/stdc++.h>
using namespace std;
int MOD=1e9+7;

long long  memo(int n, vector<long long>&dp){

  if(n <= 1){
    return 1;
  }

  long long totalWays = 0;

  if(dp[n]!=-1){
    return dp[n];
  }

  for(int i=1;i<=6;i++){
    if(n-i >= 0){
    totalWays += memo(n-i,dp);
    }
  }

  return dp[n] = totalWays%MOD;

}

void solve() {
     long long n;cin>>n;
     vector<long long int>dp(n+1,-1);
     cout<<memo(n,dp)<<" ";
}
int main(){
    solve();
    return 0;
}