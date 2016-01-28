import csv
import os
import glob

def run():
  outputFile = "PackageInterface.csv"
  pkgRPCFile = glob.glob("files/*-RPC.html")
  pkgHL7File = glob.glob("files/*-HL7.html")
  pkgProtocolFile = glob.glob("files/*-Protocols.html")
  header = ['Package','RPC','HL7','Protocols']
  outCsv = {}
  for rpcFile in pkgRPCFile:
    if rpcFile.endswith("All-RPC.html"):
      continue
    rpcFile = os.path.basename(rpcFile)
    rpcFile =  rpcFile[:-9]
    outCsv.setdefault(rpcFile, [None, None, None])[0] = True
  for hl7File in pkgHL7File:
    if hl7File.endswith("All-HL7.html"):
      continue
    hl7File = os.path.basename(hl7File)
    hl7File =  hl7File[:-9]
    outCsv.setdefault(hl7File, [None, None, None])[1] = True
  for protocolFile in pkgProtocolFile:
    if protocolFile.endswith("All-Protocols.html"):
      continue
    protocolFile = os.path.basename(protocolFile)
    protocolFile =  protocolFile[:-15]
    outCsv.setdefault(protocolFile, [None, None, None])[2] = True

  with open(outputFile, 'w') as output:
    csvWtr = csv.writer(output, lineterminator='\n')
    csvWtr.writerow(header)
    for key in sorted(outCsv.keys()):
      outCsv[key].insert(0,key)
      csvWtr.writerow(outCsv[key])


if __name__ == '__main__':
  run()
