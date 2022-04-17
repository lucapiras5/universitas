#! /usr/bin/python3

left = []
import csv
with open("progress.csv") as csv_fp:
    csv_reader = csv.reader(csv_fp, delimiter="\t")
    for row in csv_reader:
        chapter, progress, end = row
        end = int(end)
        if progress == 'x':
            progress = end
        else:
            progress = int(progress)
        left.append(end-progress)
print("{} pages left".format(sum(left)))
