export const LEET_CODE_PROBLEMS = {
    "1": {
        name: "1. Two Sum",
        link: "https://leetcode.com/problems/two-sum/description/",
        description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
        solutions: [
    
        ]
    },
    "4": {
        name: "4. Median of two sorted Arrays",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).`,
        googleDocLink: "https://docs.google.com/presentation/d/1IyfLZDow4StFNdiDnXgY0qtGqqLup7VQKHkLJE_IeXI/embed",
        solutions: [
            `int getMedian(int ar1[], int ar2[], int n)
            {
                int i = 0;  /* Current index of i/p array ar1[] */
                int j = 0; /* Current index of i/p array ar2[] */
                int count;
                int m1 = -1, m2 = -1;
             
                /* Since there are 2n elements, median will be average
                 of elements at index n-1 and n in the array obtained after
                 merging ar1 and ar2 */
                for (count = 0; count <= n; count++)
                {
                    /*Below is to handle case where all elements of ar1[] are
                      smaller than smallest(or first) element of ar2[]*/
                    if (i == n)
                    {
                        m1 = m2;
                        m2 = ar2[0];
                        break;
                    }
             
                    /*Below is to handle case where all elements of ar2[] are
                      smaller than smallest(or first) element of ar1[]*/
                    else if (j == n)
                    {
                        m1 = m2;
                        m2 = ar1[0];
                        break;
                    }
                     /* equals sign because if two
                        arrays have some common elements */
                    if (ar1[i] <= ar2[j])
                    {
                        m1 = m2;  /* Store the prev median */
                        m2 = ar1[i];
                        i++;
                    }
                    else
                    {
                        m1 = m2;  /* Store the prev median */
                        m2 = ar2[j];
                        j++;
                    }
                }
             
                return (m1 + m2)/2;
            }`,
            `int getMedian(int ar1[], int ar2[], int n)
            {
                /* return -1  for invalid input */
                if (n <= 0)
                    return -1;
                if (n == 1)
                    return (ar1[0] + ar2[0])/2;
                if (n == 2)
                    return (max(ar1[0], ar2[0]) + min(ar1[1], ar2[1])) / 2;
             
                int m1 = median(ar1, n); /* get the median of the first array */
                int m2 = median(ar2, n); /* get the median of the second array */
             
                /* If medians are equal then return either m1 or m2 */
                if (m1 == m2)
                    return m1;
             
                /* if m1 < m2 then median must exist in ar1[m1....] and
                    ar2[....m2] */
                if (m1 < m2)
                {
                    if (n % 2 == 0)
                        return getMedian(ar1 + n/2 - 1, ar2, n - n/2 +1);
                    return getMedian(ar1 + n/2, ar2, n - n/2);
                }
             
                /* if m1 > m2 then median must exist in ar1[....m1] and
                    ar2[m2...] */
                if (n % 2 == 0)
                    return getMedian(ar2 + n/2 - 1, ar1, n - n/2 + 1);
                return getMedian(ar2 + n/2, ar1, n - n/2);
            }`,
            `double Solution::findMedianSortedArrays(const vector<int> &A, const vector<int> &B) {
                int l1 = A.size(), l2 = B.size();
            
                int leftHalf = (l1+l2)/2;
                int low = max(0, (leftHalf-l2)), high = min(l1, leftHalf);
                
                double ans;
            
                while(low <= high) {
                    int mid = low + (high-low)/2;
                    int ax1 = (mid>0) ? A[mid-1] : INT_MIN;
                    int ax2 = (mid < l1) ? A[mid] : INT_MAX; 
                    int by1 = (leftHalf-mid > 0) ? B[leftHalf-mid-1] : INT_MIN;
                    int by2 = (leftHalf-mid < l2) ? B[leftHalf-mid] : INT_MAX;
            
                    if(ax1 <= by2 && by1 <= ax2) {
                        if((l1+l2)%2==0) {
                            ans = (double)(max(ax1, by1) + min(ax2, by2))/2;
                        }
                        else if(mid > (l1+l2)/2) {
                            ans = max(ax1, by1);
                        }
                        else {
                            ans = min(ax2, by2);
                        }
                        break;
                    }
                    else if(ax1 > by2){
                        high = mid-1;
                    }
                    else {
                        low = mid + 1;
                    }
                }
            
                return ans;
            }`
        ]
    },
    "12": {
        name: "12. Integer to Roman",
        link: "https://leetcode.com/problems/integer-to-roman/description/",
        description: `Given an integer, convert it to a Roman numeral.`,
        googleDocLink: "https://docs.google.com/presentation/d/1SYfCWPIyuKNlx01frU22LK40jwF6vuRtAxuXYpalxKE/embed",
        solutions: [
            `
            int printRoman(int number)
            {
                int num[] = {1,4,5,9,10,40,50,90,100,400,500,900,1000};
                string sym[] = {"I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"};
                int i=12;   
                while(number>0)
                {
                  int div = number/num[i];
                  number = number%num[i];
                  while(div--)
                  {
                    cout<<sym[i];
                  }
                  i--;
                }
            }`
        ]
    },
    "14": {
        name: "14. Longest Common Prefix",
        link: "https://leetcode.com/problems/longest-common-prefix/description/",
        description: `Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".`,
        googleDocLink: "https://docs.google.com/presentation/d/1RykBG0KyrQ_DWY6rPK_NQjCSommaAffWU9agxnGiLtI/embed",
        solutions: []
    }
};