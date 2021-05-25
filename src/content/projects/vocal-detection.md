---
title: "Vocal Detection"
abstract: "Using a convolutional neural network to detect the presence and location of vocals in a given song"
student: "brendanoc"
year: "2019"
host: "MXX"
host_website: "http://www.mxxmusic.com"
image: "./vocal-detection.png"
video_provider: "youtube"
video_id: "M7K5tstueWI"
---
Using a convolutional neural network, I built a system that could identify to significant accuracy, thee presence and location of vocal activity an a song.
Using sonic visualiser, I was able to plot the predictions against the waveform to visually see how its . predictions aligned with the ground truth. 0 (bottom value) indicates no vocals and 1 (top value) indicates vocals. Green contours represent the detectors certainty. The higher this contour is the more certain the detector is of vocals being present.
Results showed that the detector performed particular well on standard rock and pop songs. On rare instances it misinterpreted an expressive element of an instrumental solo (such as a guitar’s wail or vibrato). There were no classical (orchestral instrumentation) songs in the training data, and the detector therefore did not perform classical music, especially when taking expressivity into consideration.
The architecture used to produce this detector was inspired by Schlüter and Grills paper “Exploring Data Augmentation For Improved Singing Voice Detection With Neural Networks”